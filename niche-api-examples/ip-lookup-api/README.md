# IP Lookup API

IP 주소 하나를 주면 WHOIS/RDAP 소유자 정보(ASN·국가·네트워크 대역 등)를 반환합니다.

RapidAPI에서 "IP Lookup API"로 검색해 구독하면 `X-RapidAPI-Key`를 발급받습니다(무료 플랜 있음).
호스트는 `ip-lookup-api1.p.rapidapi.com`로 고정입니다.

## curl

```bash
curl "https://ip-lookup-api1.p.rapidapi.com/v1/lookup?ip=8.8.8.8" \
  -H "X-RapidAPI-Key: YOUR_RAPIDAPI_KEY" \
  -H "X-RapidAPI-Host: ip-lookup-api1.p.rapidapi.com"
```

## Python

```python
import requests

url = "https://ip-lookup-api1.p.rapidapi.com/v1/lookup"
headers = {
    "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
    "X-RapidAPI-Host": "ip-lookup-api1.p.rapidapi.com",
}
params = {"ip": "8.8.8.8"}

res = requests.get(url, headers=headers, params=params)
print(res.json())
```

## JavaScript (Node.js / fetch)

```javascript
const res = await fetch("https://ip-lookup-api1.p.rapidapi.com/v1/lookup?ip=8.8.8.8", {
  headers: {
    "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
    "X-RapidAPI-Host": "ip-lookup-api1.p.rapidapi.com",
  },
});
const data = await res.json();
console.log(data);
```

---

[← GlowHalo 니치API 전체 목록으로](../README.md)
