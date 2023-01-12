import React, {useState} from 'react'

const List = React.memo(({snapshot,provided,todoData,setTodoData,completed,title, id}) => {

  const[isEditing,setIsEditing]= useState(false); // 첫번째 인수- 변수이름, 두번째 인수- State를 정하는 함수
  const[editedTitle,setEditedTitle]= useState(title);


  //x버튼을 클릭했을때
  //해당 id를 가진 list를 빼고 이를 todoData로 새로 setItem하는 메서드
  const handleClick = (id) => {
    let newtodoData = todoData.filter((data) => data.id !== id); // 조건문을 통과하는 요소들로 재나열
    setTodoData(newtodoData);
    localStorage.setItem('todoData',JSON.stringify(newtodoData))
  }

  //isEditing == true일때


  //edit에 관한 input이 onChange일 때 EditedTitle를 수정하는 메서드
  const handleEditChange = (e) => {
    setEditedTitle(e.target.value)
  }

  //submit 타입 버튼을 클릭했을때 
  //해당 id를 가진 list의 title를 editedTitle로 수정하고 이를 todoData로 새로 setItem하는 메서드
  const handleSubmit = (e) => {
    e.preventDefault()

    let newtodoData= todoData.map((data) => {

      if(data.id === id){
        data.title = editedTitle
      }
      return data
    })
    setTodoData(newtodoData)
    localStorage.setItem('todoData',JSON.stringify(newtodoData))
    setIsEditing(false)
  }

  //isEditing == false일때 


  //checkbox가 onChange할 때
  //해당 id를 가진 list의 completed를 수정하고 이를 todoData로 새로 setItem하는 메서드
  const handleCompletedChange = (id) => {
    let newtodoData = todoData.map((data)=> {
      if(data.id === id){
        data.completed = !data.completed;
      }
      return data; //newtodoData=data
    });
    setTodoData(newtodoData); //state가 바뀌면 컴포넌트는 리렌더링
    localStorage.setItem('todoData',JSON.stringify(newtodoData))
  }

  if(isEditing){
    return(
      <div className={`flex items-center justify-between w-full px-4 py-1 my-2 bg-gray-100 text-gray-600 border rounded`}> 
        
          <div className='items-center'>
            <form>
              <input
                value={editedTitle}
                className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
                onChange={handleEditChange}
              />
            </form>
              
          </div>

          <div className='items-center'> 
              <button className="px-4 py-2 float-right" onClick={() => setIsEditing(false)}>x</button>
              <button className="px-4 py-2 float-right" type='submit' onClick={handleSubmit}>save</button> 
          </div>
      </div>   
    )
  } //form 안에 submit 버튼이 없어서 따로 onclick

  else{
    return (
      <div key={id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}
                className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
                > 
                  
                    <div className='items-center'>
                      <input type="checkbox"
                      onChange={() => handleCompletedChange(id)}
                      defaultChecked={completed}
                      />
                        <span className={completed ? "line-through" : undefined}>{title}</span>
                    </div>
                    <div className='items-center'> 
                        <button className="px-4 py-2 float-right" onClick={() => handleClick(id)}>x</button>
                        <button className="px-4 py-2 float-right" onClick={() => setIsEditing(true)}>edit</button>
                    </div>
                </div>       
    )
  }

  
})

export default List

