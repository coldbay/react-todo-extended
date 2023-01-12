# react-todo-extended

기존 todo리스트 심화버전
참고한 강의: react-todo와 동일
강의노트 필기: https://natural-dracopelta-45d.notion.site/todo-extended-efeba6be525440bda12bb32f2ceb0bc3

### 달라진 점
```
컴포넌트별로 js 나뉨(props 활용)
tailwind-css 사용(classname에서 즉각적인 스타일 지정)
드래그 앤 드롭 기능(list.js)
edit 기능(lists.js)

```

### 컴포넌트별로 나눠 설명

```
App.js - 배경과 실행 초기에 보이는 제일 큰 박스를 담당,
TodoData state를 모두 지우는 Delete All 버튼이 있으며
Lists에 todoData를 Form에 value와 handleSubmit(value를 제목으로 하여 newTodo를 setTodoData하는 함수)를 props한다.


Form.js - 할 일을 입력하는 form과 이를 submit하는 input 태그로 구성,
handleChange 함수로 setValue하고 onSubmit시 handleSubmit 함수를 실행한다.


Lists.js - react-beautiful-dnd를 통해 드래그 앤 드롭 기능을 구현하였다.
각각의 List 객체들을 Draggable하게 만들었으며 
onDragEnd할때 source와 destination의 index를 활용하여 newtodoData를 재구성하는 handleEnd함수를 호출한다.


List.js - isEditing에 따라 return되는 html 요소가 다르며
true일때 editedTitle를 입력하는 input태그와 이를 submit할 버튼이,
false일때 checkbox타입의 input태그를 렌더링한다.
이를 이용하여 todoData를 새로 setItem하는 메서드들을 사용한다.
```