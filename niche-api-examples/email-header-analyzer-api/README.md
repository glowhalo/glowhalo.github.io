# Email Header Analyzer API

이메일 원본 헤더 텍스트를 주면 발신 경로(Received 체인)와 SPF/DKIM/DMARC 인증 결과를 구조화된 JSON으로 반환합니다.

**상태: 마켓플레이스 등록 준비 중입니다.** RapidAPI/Zyla/API.Market/FireAPI에 게시되면 이 문서를
실제 호출 가능한 예제로 갱신합니다. 요청/응답 형태는 이미 확정돼 있습니다:

```
POST /v1/analyze
Content-Type: application/json

{
  "rawHeaders": "Received: from mail.example.com ...\nAuthentication-Results: mx.google.com; spf=pass; dkim=pass; dmarc=pass\nFrom: sender@example.com\nSubject: Hello\n"
}
```

---

[← GlowHalo 니치API 전체 목록으로](../README.md)
