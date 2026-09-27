# Domain Lookup API

도메인 하나를 주면 WHOIS/RDAP 등록 정보(등록기관·등록일·만료일·네임서버 등)를 반환합니다.

RapidAPI에서 "Domain Lookup API"로 검색해 구독하면 `X-RapidAPI-Key`를 발급받습니다(무료 플랜 있음).
호스트는 `glowhalo-domain-lookup-api.p.rapidapi.com`로 고정입니다.

## curl

```bash
curl "https://glowhalo-domain-lookup-api.p.rapidapi.com/v1/lookup?domain=example.com" \
  -H "X-RapidAPI-Key: YOUR_RAPIDAPI_KEY" \
  -H "X-RapidAPI-Host: glowhalo-domain-lookup-api.p.rapidapi.com"
```

## Python

```python
import requests

url = "https://glowhalo-domain-lookup-api.p.rapidapi.com/v1/lookup"
headers = {
    "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
    "X-RapidAPI-Host": "glowhalo-domain-lookup-api.p.rapidapi.com",
}
params = {"domain": "example.com"}

res = requests.get(url, headers=headers, params=params)
print(res.json())
```

## JavaScript (Node.js / fetch)

```javascript
const res = await fetch("https://glowhalo-domain-lookup-api.p.rapidapi.com/v1/lookup?domain=example.com", {
  headers: {
    "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
    "X-RapidAPI-Host": "glowhalo-domain-lookup-api.p.rapidapi.com",
  },
});
const data = await res.json();
console.log(data);
```

---

[← GlowHalo 니치API 전체 목록으로](../README.md)
