import axios from "axios";
export const getDataAction = () => async(dispatch,getState)=> {

                try {
                  const { data } = await axios.get(
                    "https://jsonplaceholder.typicode.com/todos"
                  );
                  dispatch({type:"getdata",paylod:data})
                // localStorage.setItem('test', JSON.stringify(data))
                //   console.log(data);
                } catch (err) {
                  console.log("Somthing wrong");
                }
   
}
export const changeMyTable = (index,page) => (dispatch,getState) => {
        const data  = getState().myTable
        console.log(data)
        // dispatch(prev=>{
        //         const temp = [...prev]
        //         // console.log((page-1)*10 + index)
        //         temp.splice((page-1)*10 + index,1)
        //         return [...temp]
        // })
        // // posts[index].body = content
        // dispatch({ type: 'changeData', payload: data })
        // localStorage.setItem('test', JSON.stringify(data))
      }
      