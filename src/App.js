import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {counterAction} from "./action"

function App() {
 const distpatch=useDispatch()

 

  // const {num} =useSelector((state)=> state.counter)
  const state = useSelector(state => state.post.data)
  const err = useSelector(state => state.post.err)
  const looding = useSelector(state => state.post.looding)

  // console.log(state)
  useEffect(() => {
    distpatch(counterAction())
  }, [])
  
  return (
    <div className="App">
      <div>{err && "Somthing wrong" }</div>
      <div>{looding && "looding" }</div>
      {state.map((item,index)=><div key={index}>
      <p>{item.id}</p>
      <p>{item.title}</p>
      <p>{item.body}</p>
      <br />
      </div>)}
      {/* <button onClick={()=>{
        distpatch(counterAction(1))}}>change1</button>
      <div>{num}</div>
      <button onClick={()=>{
        distpatch(counterAction(5))}}>change2</button>
      <div>{num}</div>
      <button onClick={()=>{
        distpatch(counterAction(-5))}}>change3</button>
      <div>{num}</div>
      <button onClick={()=>{
        distpatch(counterAction(10))}}>change4</button>
      <div>{num}</div> */}
      
  
    </div>
  );
}

export default App;
