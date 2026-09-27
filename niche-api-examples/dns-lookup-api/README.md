# DNS Lookup API

도메인 하나를 주면 DNS 레코드(A/AAAA/MX/TXT/NS 등)를 조회합니다. type 생략 시 주요 6종을 한 번에 반환합니다.

RapidAPI에서 "DNS Lookup API"로 검색해 구독하면 `X-RapidAPI-Key`를 발급받습니다(무료 플랜 있음).
호스트는 `glowhalo-dns-lookup-api.p.rapidapi.com`로 고정입니다.

## curl

```bash
curl "https://glowhalo-dns-lookup-api.p.rapidapi.com/v1/lookup?domain=example.com&type=MX" \
  -H "X-RapidAPI-Key: YOUR_RAPIDAPI_KEY" \
  -H "X-RapidAPI-Host: glowhalo-dns-lookup-api.p.rapidapi.com"
```

## Python

```python
import requests

url = "https://glowhalo-dns-lookup-api.p.rapidapi.com/v1/lookup"
headers = {
    "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
    "X-RapidAPI-Host": "glowhalo-dns-lookup-api.p.rapidapi.com",
}
params = {"domain": "example.com", "type": "MX"}

res = requests.get(url, headers=headers, params=params)
print(res.json())
```

## JavaScript (Node.js / fetch)

```javascript
const res = await fetch("https://glowhalo-dns-lookup-api.p.rapidapi.com/v1/lookup?domain=example.com&type=MX", {
  headers: {
    "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
    "X-RapidAPI-Host": "glowhalo-dns-lookup-api.p.rapidapi.com",
  },
});
const data = await res.json();
console.log(data);
```

---

[← GlowHalo 니치API 전체 목록으로](../README.md)
