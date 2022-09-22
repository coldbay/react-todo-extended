import React from 'react'

export default function Form({value,setValue,handleSubmit}) {

    const handleChange = (e) => {
        //console.log('e',e.target.value)
        setValue(e.target.value); //써진 값들
      }

  return (

    <div>
        <form style={{display:'flex'}} onSubmit={handleSubmit}> 
            <input //form- 입력양식 태그
              type="text" 
              name="value"
              style={{flex:'10', padding: '5px'}}
              placeholder="해야할 일을 입력하세요"
              value={value} //적히는 부분
              onChange={handleChange}// 적으면 value값 변경
            />
            <input
              type="submit"
              className="btn"
              style={{flex:'1'}}
              value="입력"
            />
          </form>
    </div>
  )
}
