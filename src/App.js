import React, {useState} from "react"; //리액트 라이브러리에서 React, Component 클래스 가져오기
import "./App.css"
import Form from "./components/Form";
import Lists from "./components/Lists"

export default function App(){  //함수형 컴포넌트

  const[todoData,setTodoData]= useState([]); // 첫번째 인수- 변수이름, 두번째 인수- State를 정하는 함수
  const[value,setValue]= useState("");

  



  //구현한 함수
    const handleSubmit = (e) => {
      //form 안에서 input를 전송시 리로드를 막음
      e.preventDefault();

      //새로운 할 일 데이터
      let newTodo = {
        id: Date.now(),
        title: value,
        completed: false
      }  
      //this.setState({ todoData : [...todoData, newTodo], value:""}); -> 전개 연산자 (특정 객체의 값 -> 다른 객체로 복제, 옮길때)
      setTodoData(prev => [...prev, newTodo])
      setValue("")
    }


  // 랜더 시 보이는 UI (랜더 함수내에서 UI 작성), List에 props
    return( 
      <div className="flex items-center justify-center w-screen h-screen bg-blue-100">

        <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
          <div className="flex justify-between mb-3">
            <h1>할 일 목록</h1>
          </div>

          
          <Lists todoData={todoData} setTodoData={setTodoData}/>
          <Form value={value} setValue={setValue} handleSubmit={handleSubmit}/>

          
        </div>

      </div>
    )
}
