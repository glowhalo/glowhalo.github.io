# Security Headers Checker API

URL 하나를 주면 HTTP 보안 헤더(CSP·HSTS·X-Frame-Options 등) 설정 여부를 점검해 등급과 함께 반환합니다.

RapidAPI에서 "Security Headers Checker API"로 검색해 구독하면 `X-RapidAPI-Key`를 발급받습니다(무료 플랜 있음).
호스트는 `security-headers-checker-api.p.rapidapi.com`로 고정입니다.

## curl

```bash
curl "https://security-headers-checker-api.p.rapidapi.com/v1/check?url=https://example.com" \
  -H "X-RapidAPI-Key: YOUR_RAPIDAPI_KEY" \
  -H "X-RapidAPI-Host: security-headers-checker-api.p.rapidapi.com"
```

## Python

```python
import requests

url = "https://security-headers-checker-api.p.rapidapi.com/v1/check"
headers = {
    "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
    "X-RapidAPI-Host": "security-headers-checker-api.p.rapidapi.com",
}
params = {"url": "https://example.com"}

res = requests.get(url, headers=headers, params=params)
print(res.json())
```

## JavaScript (Node.js / fetch)

```javascript
const res = await fetch("https://security-headers-checker-api.p.rapidapi.com/v1/check?url=https://example.com", {
  headers: {
    "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
    "X-RapidAPI-Host": "security-headers-checker-api.p.rapidapi.com",
  },
});
const data = await res.json();
console.log(data);
```

---

[← GlowHalo 니치API 전체 목록으로](../README.md)
