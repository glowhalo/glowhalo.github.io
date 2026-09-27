# Link Preview API

URL 하나를 주면 title/description/og:image/favicon 등 링크 미리보기 메타데이터를 반환합니다.

RapidAPI에서 "Link Preview API"로 검색해 구독하면 `X-RapidAPI-Key`를 발급받습니다(무료 플랜 있음).
호스트는 `glowhalo-link-preview-api.p.rapidapi.com`로 고정입니다.

## curl

```bash
curl "https://glowhalo-link-preview-api.p.rapidapi.com/v1/preview?url=https://github.com" \
  -H "X-RapidAPI-Key: YOUR_RAPIDAPI_KEY" \
  -H "X-RapidAPI-Host: glowhalo-link-preview-api.p.rapidapi.com"
```

## Python

```python
import requests

url = "https://glowhalo-link-preview-api.p.rapidapi.com/v1/preview"
headers = {
    "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
    "X-RapidAPI-Host": "glowhalo-link-preview-api.p.rapidapi.com",
}
params = {"url": "https://github.com"}

res = requests.get(url, headers=headers, params=params)
print(res.json())
```

## JavaScript (Node.js / fetch)

```javascript
const res = await fetch("https://glowhalo-link-preview-api.p.rapidapi.com/v1/preview?url=https://github.com", {
  headers: {
    "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
    "X-RapidAPI-Host": "glowhalo-link-preview-api.p.rapidapi.com",
  },
});
const data = await res.json();
console.log(data);
```

---

[← GlowHalo 니치API 전체 목록으로](../README.md)
