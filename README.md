## 프로젝트 요약

```
github에서 제공하는 통신 octokit을 이용해 github에 있는 angular의 issue를 보여주는 페이지입니다. 
상태관리는 useReducer + contextAPI로 진행했고, styled-components로 css를 스타일링 했습니다.
```

### 📆 기간

#### 22년 10월 28일 ~ 22년 10월 31일

---

### 🔧 기술 스택

<div align=center> 
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>   
 <img src="https://img.shields.io/badge/styled_components-3U7U2U?style=for-the-badge&logo=css&logoColor=black"/> 
 <img src="https://img.shields.io/badge/context_API-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"/> 
</div>

---

### 💻 실행 방법

1.  라이브러리를 설치합니다.

```
npm install
```

2.  프로젝트를 실행합니다.

```
 npm start
```

### 배포 링크

[배포링크 바로가기](https://comfy-griffin-242f78.netlify.app/)
<br/>

## 프로젝트 설명

<details>
<summary>  📂 디렉토리 구조</summary>
<div markdown="1">

```

🗂 src
┣ 📁 apis
    ┗  octokit.js
 ┣ 📁 components
 	┗  📁Layout.js
    	┣ AppLayout.js
    	┗ DiaryEditor.js
    ┣ Error.js
    ┣ IssueList.js
    ┣ IssueListItem.js
    ┣ Label.js
    ┗ Loader.js
 ┣ 📂 pages
   ┣ DetailPage.js
   ┗ LandingPage.js
 ┣ 📂 reducer
   ┗ issues.js
 ┣ 📂 util
   ┗ date.js
 ┣ App.js
 ┣ index.js
 
```

</div>
</details>

<details>
<summary>🧻 요구사항</summary>
<div markdown="1">

### ⚙️ 과제 범위

1. 이슈 목록 화면
    - 이슈 목록 가져오기 API 활용
    - open 상태의 이슈 중 코멘트가 많은 순으로 정렬
    - 각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’를 표시
    - 다섯번째 셀에는 광고 이미지 출력
              
        - 광고 이미지 클릭 시 [https://www.wanted.co.kr/](https://www.wanted.co.kr/) 로 이동
    - 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)

1. 이슈 상세 화면
    - 이슈의 상세 내용 표시
    - ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시
    
2. 공통 헤더
    - 두 페이지는 공통 헤더를 공유합니다.
    - 헤더에는 Organization Name / Repository Name이 표시됩니다.

### 요구 사항

- 필수 요구 사항
    - 이슈 목록 및 상세 화면 기능 구현
    - Context API를 활용한 API 연동
    - 데이터 요청 중 로딩 표시
    - 에러 화면 구현
    - 지정된 조건(open 상태, 코멘트 많은 순)에 맞게 데이터 요청 및 표시
    - 반응형 웹 구현(UI는 데스크톱, 모바일에서 보았을 때 모두 읽기 편하게 구현)

- 선택 사항
    - CSS-in-JS 적용
</div>
</details>


---


### 사용한 라이브러리 및 API, CDN 등
- octokit
- github-markdown
- react-router
- styled-components
---






