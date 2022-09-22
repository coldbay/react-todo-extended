import React from 'react'

export default function List({todoData, setTodoData}) {


//x버튼 스타일
const btnStyle={        
    color: "#fff",
    border: "none", //테두리
    padding: "5px 9px", // 상하 5px, 좌우 9px
    borderRadius: "50%", // 일반 css - border-radius
    cursor: "pointer",
    float: "right"  //오른쪽에 부유하는 버튼 생성
  }

  const getStyle = (completed) => {
    return{
      padding: "10px",
      borderBottom:"1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none"
    }
  }

  const handleClick = (id) => {
    let newtodoData = todoData.filter((data) => data.id !== id); // 조건문을 통과하는 요소들로 재나열
    setTodoData(newtodoData);
    //console.log('newtodoData', newtodoData)
  }

  const handleCompletedChange = (id) => {
    let newtodoData = todoData.map((data)=> {
      if(data.id === id){
        data.completed = !data.completed;
      }
      return data; //newtodoData=data
    });
    setTodoData(newtodoData); //state가 바뀌면 컴포넌트는 리렌더링
  }

return (
    <div>
        {todoData.map((data) => (  //새로운 배열로 반환
          //key 속성 필수 -요소의 리스트를 나열할 때, REACT가 변경하는 부분 식별하는데 도움

          <div style={getStyle(data.completed)} key={data.id}>  
          <input type="checkbox"
          onChange={() => handleCompletedChange(data.id)}
          defaultChecked={false}
          />
          {data.title}
          <button style={btnStyle} onClick={() => handleClick(data.id)}>x</button>
        </div>
        ))}
    </div>      
  )
}

