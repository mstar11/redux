// export const counterAction =(x)=>async(dispatch,getState)=>
import axios from "axios";
export const counterAction =()=>async(dispatch,getState)=>{

        // await 
        // console.log(getState().counter)
                dispatch({type:"looding",paylod:true})
                // dispatch({type:"Add",pyload:x})
        try{
                const {data} =await axios.get("https://jsonplaceholder.typicode.com/posts")
                dispatch({type:"getdata",paylod:data})
                dispatch({type:"looding",paylod:false})
                // console.log(data)

        }catch(e){
                dispatch({type:"err",paylod:true})
                dispatch({type:"looding",paylod:false})
                console.log("somthing wrong")
        }
      
}