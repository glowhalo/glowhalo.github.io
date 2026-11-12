# GlowHalo 니치API — 사용 예제

GlowHalo가 RapidAPI·Zyla·API.Market 등에 등록한 소형 유틸리티 API들의 curl·Python·
JavaScript 호출 예제 모음입니다. 각 API는 공식/공개 프로토콜(WHOIS, RFC 표준 등)을 기반으로
동작하며, 대부분 무료 플랜을 제공합니다.

## 상품 목록

| API | 설명 |
|---|---|
| [Link Preview API](link-preview-api/) | URL의 title/description/og:image 등 링크 미리보기 메타데이터 |
| [Domain Lookup API](domain-lookup-api/) | 도메인 WHOIS/RDAP 등록 정보 |
| [Email Validation API](email-validation-api/) | 이메일 형식·MX 레코드·일회용 이메일 검증 |
| [DNS Lookup API](dns-lookup-api/) | DNS 레코드(A/AAAA/MX/TXT/NS 등) 조회 |
| [Security Headers Checker API](security-headers-api/) | HTTP 보안 헤더 점검·등급 |

## 사용법

각 폴더의 README에 curl/Python/JavaScript 예제가 있습니다. `YOUR_RAPIDAPI_KEY`를 RapidAPI에서
발급받은 키로 바꾸면 바로 동작합니다 — 대부분 무료 플랜으로 테스트할 수 있습니다.

이 저장소는 예제 전용이며, 실제 서비스 코드는 별도로 운영됩니다.
