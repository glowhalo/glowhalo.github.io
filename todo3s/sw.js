// 동봉 폰트가 들어오면서 셸이 바뀌었으므로 캐시 이름을 올린다(안 올리면 낡은 셸이 남는다).
const CACHE_NAME = "todo3s-v1";
// 폰트 **스타일시트**는 셸에 넣는다. 폰트 파일 219개는 넣지 않았다 —
// cache.addAll은 하나만 실패해도 전부 실패하는 원자적 동작이라, 설치 때 220개를
// 한꺼번에 요청하면 설치 자체가 취약해지고 느려진다. 폰트 파일은 아래 fetch 핸들러가
// 실제로 쓰인 것만 캐시에 넣는다(같은 origin + ok 응답 조건에 이미 걸린다).
// 총괄 지시에 "굳이 반대 근거가 있으면 STATUS에 적어라"고 되어 있어 그렇게 했다.
const APP_SHELL = ["./", "./index.html", "./manifest.json", "./fonts/fonts.css", "./icons/icon-192.png", "./icons/icon-512.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

// 이 핸들러는 **같은 출처 GET만** 가로챈다.
// 크로스 오리진(공유 Worker API)은 respondWith 없이 그냥 통과시킨다 — 이유 두 가지:
//   ① 앱 셸 캐시가 목적인데 공유 API 응답은 캐시 대상이 아니다(아래 put도 같은 출처만 했다).
//   ② 서비스워커가 가로챈 요청은 브라우저의 보통 망 경로를 타지 않아, 스모크의
//      page.route()로 흉내 낼 수 없다. 그래서 (l) 공유 검사가 서비스워커를 끄고 돌아야 했고,
//      "서비스워커를 거친 공유 GET"이 통째로 사각지대였다. 통과시키면 그 사각지대가 없어진다.
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  let url;
  try { url = new URL(req.url); } catch (e) { return; }
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req)
      // 캐시 조회 자체가 실패해도 앱이 죽지 않게 — 그냥 캐시가 없는 것으로 본다
      .catch(() => undefined)
      .then((cached) => {
        const network = fetch(req)
          .then((res) => {
            if (res.ok) {
              const clone = res.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(req, clone)).catch(() => {});
            }
            return res;
          })
          .catch((err) => {
            // 캐시도 없고 망도 안 되면 **오류를 그대로 던진다.**
            // 예전에는 `.catch(() => cached)`라 undefined가 respondWith로 흘러가
            // "서비스워커가 응답을 안 줬다"는 엉뚱한 오류가 났다.
            if (cached) return cached;
            throw err;
          });
        return cached || network;
      })
  );
});
