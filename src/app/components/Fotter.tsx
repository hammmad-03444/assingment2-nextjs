import React from 'react'
type myArr={
    teachers:string[]
    
}

const Fotter = (props:myArr) => {

  return (
    <>
    <h1 className="bg-emerald-500 text-white font-extrabold flex items-center align justify-center ">Thanks to sir {props.teachers[0]} and sir {props.teachers[1]}</h1>
    <h1 className="bg-emerald-500 text-white font-extrabold flex items-center align justify-center ">Footer</h1>
    </>
  )
}

export default Fotter