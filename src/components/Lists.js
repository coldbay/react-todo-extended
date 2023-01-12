import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import List from './List';

const Lists= React.memo(({todoData, setTodoData})=> {



  const handleEnd =(result) => {
    //result의 source(시작점)와 destination(종점) 인덱스 활용
    //-> request 대상을 설명하는 문자열을 출력

    if(!result.destination) return;

    //리액트의 불변성을 위해 새로 todoData 선언
    const newtodoData = todoData;

    //source.index의 요소 지우고 집어넣기 -> splice와 구조분해 할당 활용
    const [reorderedItem] = newtodoData.splice(result.source.index,1)

    //destination.index에 reorderedItem
    newtodoData.splice(result.destination.index, 0, reorderedItem)
    setTodoData(newtodoData)
    localStorage.setItem('todoData',JSON.stringify(newtodoData))

  }

//Droppable 공간에서 Draggable 요소들이 drag&drop 가능해진다.
return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {todoData.map((data,index) => (  //새로운 배열로 반환
              //key 속성 필수 -요소의 리스트를 나열할 때, REACT가 변경하는 부분 식별하는데 도움
            <Draggable
              key={data.id}
              draggableId={data.id.toString()} 
              index={index}
            >
            {(provided, snapshot) => ( //템플릿 리터럴 `${} ` https://curryyou.tistory.com/185
              <List
                id={data.id}
                completed={data.completed}
                title={data.title}
                provided={provided}
                snapshot={snapshot}
                todoData={todoData}
                setTodoData={setTodoData}
              />
            )}
            </Draggable>
            ))}
            {provided.placeholder} 
        </div>
        )}
        </Droppable>
      </DragDropContext>
    </div>      
  )
})

export default Lists