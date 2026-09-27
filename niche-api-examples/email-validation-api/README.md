# Email Validation API

이메일 주소 하나를 주면 형식·도메인 MX 레코드·일회용(disposable) 여부 등을 검증합니다.

RapidAPI에서 "Email Validation API"로 검색해 구독하면 `X-RapidAPI-Key`를 발급받습니다(무료 플랜 있음).
호스트는 `glowhalo-email-validation-api.p.rapidapi.com`로 고정입니다.

## curl

```bash
curl "https://glowhalo-email-validation-api.p.rapidapi.com/v1/validate?email=someone@example.com" \
  -H "X-RapidAPI-Key: YOUR_RAPIDAPI_KEY" \
  -H "X-RapidAPI-Host: glowhalo-email-validation-api.p.rapidapi.com"
```

## Python

```python
import requests

url = "https://glowhalo-email-validation-api.p.rapidapi.com/v1/validate"
headers = {
    "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
    "X-RapidAPI-Host": "glowhalo-email-validation-api.p.rapidapi.com",
}
params = {"email": "someone@example.com"}

res = requests.get(url, headers=headers, params=params)
print(res.json())
```

## JavaScript (Node.js / fetch)

```javascript
const res = await fetch("https://glowhalo-email-validation-api.p.rapidapi.com/v1/validate?email=someone@example.com", {
  headers: {
    "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
    "X-RapidAPI-Host": "glowhalo-email-validation-api.p.rapidapi.com",
  },
});
const data = await res.json();
console.log(data);
```

---

[← GlowHalo 니치API 전체 목록으로](../README.md)
