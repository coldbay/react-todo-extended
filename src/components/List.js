import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

export default function List({todoData, setTodoData}) {



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

  const handleEnd =(result) => {
    //result의 source 인덱스와 destination 인덱스 활용
    console.log("result",result)

    if(!result.destination) return;

    //리액트의 불변성을 위해 새로 todoData 선언
    const newtodoData = todoData;

    //source.index의 요소 지우고 집어넣기 -> splice와 구조분해 할당 활용
    const [reorderedItem] = newtodoData.splice(result.source.index,1)

    //destination.index에 reorderedItem
    newtodoData.splice(result.destination.index, 0, reorderedItem)
    setTodoData(newtodoData)
  }

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
              <div key={data.id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}
              className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
              > 
                
                  <div className='items-center'>
                    <input type="checkbox"
                    onChange={() => handleCompletedChange(data.id)}
                    defaultChecked={false}
                    />
                      <span className={data.completed ? "line-through" : undefined}>{data.title}</span>
                  </div>
                  <div className='items-center'> 
                      <button className="px-4 py-2 float-right" onClick={() => handleClick(data.id)}>x</button>
                  </div>
              </div>       
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
}

