import React from 'react'

const List = React.memo(({snapshot,provided,todoData,setTodoData,completed,title, id}) => {

  console.log('List is rendering')

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
    <div key={id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}
              className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
              > 
                
                  <div className='items-center'>
                    <input type="checkbox"
                    onChange={() => handleCompletedChange(id)}
                    defaultChecked={false}
                    />
                      <span className={completed ? "line-through" : undefined}>{title}</span>
                  </div>
                  <div className='items-center'> 
                      <button className="px-4 py-2 float-right" onClick={() => handleClick(id)}>x</button>
                  </div>
              </div>       
  )
})

export default List

