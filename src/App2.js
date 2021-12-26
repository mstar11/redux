import React, { useEffect, useState, useCallback,useMemo,useRef} from "react";
import { Table, Pagination } from "react-bootstrap";
import {useDispatch,useSelector} from "react-redux";
import { getDataAction , changeMyTable } from "./action2";

const App2 = () => {
//   const [myTable, setMyTable] = useState([]);
const dispatch =useDispatch()
const myTable =useSelector(state => state.data)
// console.log(myTable)
  const [page,setPage] = useState(1)
  const [newTable,setNewTable]= useState([])


  const paginet = useMemo(()=>
        myTable.filter((item, index) => !(index % 10))
  ,[myTable])

  useEffect(()=>{
          setNewTable(myTable.slice((page - 1)*10,page*10))
  },[myTable,page])
  useEffect(() => {
          if(!newTable.length && page !== 1){
                  setPage(page=> page -1)
          }
  
  }, [newTable])
  useEffect(() => {
        //   if(!myTable.length){
                  dispatch(getDataAction())
        //   }
    setPage(1)
  }, []);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{backgroundColor:"green"}} > # </th>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {newTable.map((item, index) => {
            return (
              <tr key={index}>
                <td
                   onClick={()=>{
                           dispatch(changeMyTable(index,page))
                        // dispatch(prev=>{
                        //         const temp = [...prev]
                        //         // console.log((page-1)*10 + index)
                        //         temp.splice((page-1)*10 + index,1)
                        //         return [...temp]
                        // })
                }} 
                >{index + 1}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                {/* <td>{item.completed?"true" :"false"}</td> */}
                {/* <td>{item.completed.toString()}</td> */}
                <td onClick={()=>{
                        const status= item.completed ;
                        setNewTable(prev=>{
                                const temp = [...prev]
                                temp[index].completed = ! status ;
                                return [...temp]
                        })

                }} style={{backgroundColor:item.completed? "green" : "red"}}>{item.completed?.toString()}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Pagination>
        {paginet.map((item, index) => {
            return <Pagination.Item key={index} active={page === index + 1} onClick={()=> setPage(index + 1)}>{index + 1}</Pagination.Item>;
          })}
      </Pagination>
    </>
  )
}
export default App2;
