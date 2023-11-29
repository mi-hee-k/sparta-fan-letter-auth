# ✉ 팬레터함 만들기
React와 redux를 사용한 팬레터함 만들기

# 🖥 프로젝트 소개 [주술회전 팬레터 컬렉션]
좋아하는 애니 캐릭터에게 편지를 남길 수 있는 팬레터함 사이트 입니다.

# 🔗 배포링크
[보러가기](http://fan-letter-weld.vercel.app)   

# ⌚ 개발기간
23.11.10 - 23.11.19

# 파일구조
![image](https://github.com/mi-hee-k/sparta-react-fan-letter/assets/90510192/d581dcd9-6763-49c8-b7a0-8670830b6490)



# 📌 주요기능
## 팬레터 쓰기
* 좋아하는 캐릭터를 골라 팬레터를 남길 수 있습니다. 

![image](https://github.com/mi-hee-k/sparta-react-fan-letter/assets/90510192/303d015f-ff44-4c53-9a5f-485a99bef10b)

## 팬레터 수정 / 삭제
* 팬레터를 클릭하면 각 팬레터 상세페이지로 넘어가고 수정과 삭제를 할 수 있습니다.
![image](https://github.com/mi-hee-k/sparta-react-fan-letter/assets/90510192/79d3de5e-cd2d-48ab-88c4-0642d98c6168)

## 원하는 캐릭터의 팬레터 몰아보기
* 탭을 눌러 원하는 캐릭터의 팬레터를 몰아볼 수 있습니다.
![image](https://github.com/mi-hee-k/sparta-react-fan-letter/assets/90510192/5f8f4947-8469-4fc8-99a3-b4176abd1600)

## 그 외
* 팬레터는 로컬스토리지에 저장되어 새로고침 후에도 남아있습니다.
* 주술회전 시그니처 대사인 '영역전개 (りょういきてんかい)' 버튼을 누르면 팬레터를 접었다 펼칠 수 있습니다.
* 제목을 누르면 홈페이지로 이동합니다.
* 버튼과 아바타이미지를 공용 컴포넌트로 만들어 다른 컴포넌트에서 사용가능합니다. 


# 💥 발생했던 오류
## Received true for a non-boolean attribute active.

<details><summary> 문제 
</summary>
styled component에 props로 넘겨준
active 속성이 props인지 html 속성인지 react가 모를 때 발생
</details>

<details><summary> 해결
</summary>

사용할 속성 명 앞에 $기호를 붙여서 DOM요소로 전달되지 않게 함
</details>

## TypeError: Cannot read properties of null (reading 'useContext')

<details><summary>문제
</summary>
reducer 파일 내부에서 useNavigate를 사용해서 오류발생
(리액트 라우터의 일부 훅이 내부적으로 useContext를 사용하고 있기 때문 / 내부적으로 useNavigate는 리액트 라우터에서 제공하는 useContext를 사용하여 라우터 상태를 관리)
</details>


<details><summary> 해결
</summary>
reducer 내에 useNavigate를 지우고 다른 로직에서 선언
</details>

