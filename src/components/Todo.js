import React, { useState } from "react";
import "../components/todo.css";
import {addTodo, deleteTodo, removeTodo} from "../actions/index"
import { useSelector, useDispatch } from 'react-redux'


export default function Todo() {
    const [inputData, setInputData] = useState('')
    const dispatch = useDispatch()
  const list = useSelector((state)=> state.todoReducers.list)

  return (
    <div className="todo">
      <div className="a">
        <h2 className="text1">TODO LIST</h2>
        <h2 className="text1">ADD YOUR LIST HERE</h2>
      </div>
      <div className="b">
        <input type="text" className="text2" placeholder="" value={inputData}
        onChange={(e)=>setInputData(e.target.value)}></input>
        <button className="btn-plus" onClick={()=>dispatch(addTodo(inputData), setInputData(''))}>+</button>
      </div>
      <div className="c">

      {list.map((elem)=>{
        return (
          <>
          <div className="c1" key={elem.id}>
        <p  className="text3" >{elem.data}</p>
        <button className="btn-delete" onClick={()=>dispatch(deleteTodo(elem.id))}>Del</button>
        </div>
          </>
        )
      })}
       
        
      </div>
      <div className="d">
      <button className="btn-clear" onClick={()=>dispatch(removeTodo())}>CLEAR ALL</button>
      </div>
    </div>
  );
}
