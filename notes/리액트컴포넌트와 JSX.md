# 1. 나의 첫번째 리액트 컴포넌트

- 리액트 컴포넌트는 XML 형식의 값을 반환(JSX)
- 컴포넌트는 일종의 UI 조각 (쉽게 재사용 가능)
- 실제 DOM 내부에 리액트 컴포넌트를 렌더링
- Hello.js(만든 컴포넌트) -> App.js -> Index.js => index.html

# 2. JSX
## Babel이란?
Babel 은 자바스크립트의 문법을 확장해주는 도구
아직 지원되지 않는 최신 문법이나, 편의상 사용하거나 실험적인 자바스크립트 문법들을 정식 자바스크립트 형태로 변환해줌으로서 구형 브라우저같은 환경에서도 제대로 실행 할 수 있게 해주는 역할을 한다.

## JSX의 기본 규칙

1. 태그는 꼭 닫기
두 개 이상의 태그는 무조건 하나의 태그로 감싸기
(Fragment <></> 브라우저 상에서 따로 별도의 엘리먼트로 나타나지 않음)

2. JSX 내부에 자바스크립트 변수
{} 으로 감싸기

3. JSX 에서 style 과 CSS class
인라인 스타일은 객체 형태로 작성 & camelCase 형태로 네이밍

```javascript 
  const style = { // 객체형태
    backgroundColor: 'black', // background-color -> camelCase
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }
```

class는 className으로 명칭 변경

4. JSX 내부의 주석
{/* 이런 형태로 */}
열리는 태그 내부에서는 // 이런 형태로도 가능