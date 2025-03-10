# 3. React의 Props, Default Props, 그리고 Children

React에서는 컴포넌트 간에 데이터를 전달하고, 컴포넌트 내부 콘텐츠를 관리하기 위해 **props**와 **children**을 사용합니다.

---

## 1. Props

- **정의:**  
  부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 객체입니다.

- **특징:**  
  - **읽기 전용:** 전달된 props는 자식 컴포넌트 내부에서 변경할 수 없습니다.
  - **데이터 전달:** 예를 들어, 아래와 같이 `Hello` 컴포넌트는 `name`과 `color`를 props로 전달받습니다.
    ```jsx
    <Hello name="다정" color="blue" />
    <Hello color="pink" />
    ```

---

## 2. Default Props

- **정의:**  
  부모 컴포넌트가 특정 props를 전달하지 않을 경우, 컴포넌트 내부에서 사용할 기본값을 지정하는 방법입니다.

- **함수형 컴포넌트에서의 구현:**  
  ES6의 매개변수 기본값 기능을 활용하여, 구조 분해 할당 시 기본값을 지정할 수 있습니다.

  ```jsx
  function Hello({ color, name = '이름없음' }) {
    return <div style={{ color }}>안녕하세요 {name}</div>;
  }
  ```

- 위 코드에서 name = '이름없음'은 부모로부터 name prop이 전달되지 않을 경우 기본값 '이름없음'이 사용되도록 합니다.
- 예를 들어, <Hello color="pink" />로 호출하면 name은 기본값 '이름없음'이 됩니다.

---

##3. Children

- **정의:**  
  JSX 태그 사이에 포함된 모든 요소는 해당 컴포넌트의 `props.children`으로 전달됩니다.

- **용도:**  
  여러 자식 요소들을 하나의 컴포넌트에서 감싸거나, 특정 스타일이나 레이아웃을 적용할 때 유용하게 사용됩니다.

- **예시 코드:**  
  ```jsx
    function Wrapper({children}) {
    const style = {
        border: '2px solid black',
        padding: '16px',
    };
    return (
        <div style={style}>
            {children}
        </div>
    )
    }

    export default Wrapper;
  ```

- 위 코드에서 <Wrapper> 컴포넌트는 태그 사이에 포함된 모든 자식 요소들을 children으로 받아, 스타일이 적용된 <div> 내부에 렌더링합니다.

- 사용 예
    ```jsx
        function App() {
        return (
            <Wrapper>
            <Hello name="다정" color="blue" />
            <Hello color="pink" />
            </Wrapper>
        );
        }
    ```
    여기서 <Wrapper> 내부에 있는 두 개의 <Hello> 컴포넌트가 children으로 전달되어 Wrapper 안에서 렌더링됩니다.
