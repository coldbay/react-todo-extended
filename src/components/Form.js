import React from 'react'

export default function Form({value,setValue,handleSubmit}) {

    console.log('Form is rendering')

    const handleChange = (e) => {
        //console.log('e',e.target.value)
        setValue(e.target.value); //써진 값들
      }

  return (

    <div>
        <form onSubmit={handleSubmit} className="flex pt-2"> 
            <input //form- 입력양식 태그
              type="text" 
              name="value"
              className='w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow'
              placeholder="해야할 일을 입력하세요"
              value={value} //적히는 부분
              onChange={handleChange}// 적으면 value값 변경
            />
            <input //hover- 위에 커서를 가져다 두면
              className='p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200' 
              type="submit"
              value="입력"
            />
          </form>
    </div>
  )
}
