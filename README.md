# ✉ 팬레터함 만들기
React와 redux-thunk를 사용한 팬레터함 만들기

# 🖥 프로젝트 소개 [주술회전 팬레터 컬렉션]
로그인 기능이 있는 좋아하는 애니 캐릭터에게 편지를 남길 수 있는 팬레터함 사이트 입니다.

# 🔗 배포링크
[보러가기](https://sparta-fan-letter-auth.vercel.app/)

# ⌚ 개발기간
23.11.29 - 23.12.04

# 파일구조
![image](https://github.com/mi-hee-k/sparta-fan-letter-auth/assets/90510192/a87c1ba1-7141-4833-9783-38560df8d32e)


# 📌 주요기능
## 회원가입
![image](https://github.com/mi-hee-k/sparta-fan-letter-auth/assets/90510192/2eec4211-2cd7-4dc4-992f-82656d4287f9)


## 로그인
![image](https://github.com/mi-hee-k/sparta-fan-letter-auth/assets/90510192/992b779e-206b-44a3-b430-fb639aae8eec)


## 프로필 변경 & 로그아웃
![image](https://github.com/mi-hee-k/sparta-fan-letter-auth/assets/90510192/1d5921db-4622-429b-9539-2a33c9a04173)
![image](https://github.com/mi-hee-k/sparta-fan-letter-auth/assets/90510192/d7e5209f-e9a9-4187-81b5-1a1b9880170b)


## 본인이 쓴 게시글만 수정 & 삭제
![image](https://github.com/mi-hee-k/sparta-fan-letter-auth/assets/90510192/0e45968e-f204-4199-ba18-42bf3851b88c)



# 💥 발생했던 오류
## A case reducer on a non-draftable value must not return undefined
styled component에 props로 넘겨준
active 속성이 props인지 html 속성인지 react가 모를 때 발생


## Effect callbacks are synchronous to prevent race conditions. Put the async function inside
useEffect 내에서 비동기 함수를 처리하려고 할 때 발생
useEffect는 아무것도 반환하지 않거나 clean up 함수를 반환해야 함

