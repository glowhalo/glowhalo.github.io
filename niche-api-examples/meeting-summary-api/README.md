# Meeting Summary API

회의 텍스트(전사본)를 주면 요약·결정사항·액션아이템으로 구조화합니다.

RapidAPI에서 "Meeting Summary API"로 검색해 구독하면 `X-RapidAPI-Key`를 발급받습니다(무료 플랜 있음).
호스트는 `glowhalo-meeting-summary-api.p.rapidapi.com`로 고정입니다.

## curl

```bash
curl -X POST "https://glowhalo-meeting-summary-api.p.rapidapi.com/v1/summarize" \
  -H "X-RapidAPI-Key: YOUR_RAPIDAPI_KEY" \
  -H "X-RapidAPI-Host: glowhalo-meeting-summary-api.p.rapidapi.com" \
  -H "Content-Type: application/json" \
  -d '{"transcript": "김대리: 배포는 목요일까지. 박팀장: 결제 연동 리뷰는 제가 오늘 중 드릴게요.", "meetingTitle": "주간 스프린트 회의"}'
```

## Python

```python
import requests

url = "https://glowhalo-meeting-summary-api.p.rapidapi.com/v1/summarize"
headers = {
    "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
    "X-RapidAPI-Host": "glowhalo-meeting-summary-api.p.rapidapi.com",
    "Content-Type": "application/json",
}
body = {
    "transcript": "김대리: 배포는 목요일까지. 박팀장: 결제 연동 리뷰는 제가 오늘 중 드릴게요.",
    "meetingTitle": "주간 스프린트 회의"
}

res = requests.post(url, headers=headers, json=body)
print(res.json())
```

## JavaScript (Node.js / fetch)

```javascript
const res = await fetch("https://glowhalo-meeting-summary-api.p.rapidapi.com/v1/summarize", {
  method: "POST",
  headers: {
    "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
    "X-RapidAPI-Host": "glowhalo-meeting-summary-api.p.rapidapi.com",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
  "transcript": "김대리: 배포는 목요일까지. 박팀장: 결제 연동 리뷰는 제가 오늘 중 드릴게요.",
  "meetingTitle": "주간 스프린트 회의"
}),
});
const data = await res.json();
console.log(data);
```

---

[← GlowHalo 니치API 전체 목록으로](../README.md)
