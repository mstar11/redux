// export const counterReducer =(state={num:0},action)=>{
//         if(action.type ==="Add"){
//                 return {num:state.num + action.pyload}

//         } else {
//                 return state;
//         }



// }
export const getPost =(state={looding:false,err:false,data:[]},action)=>{
        if(action.type === "getdata"){
                // console.log(action.paylod)
                return {...state,data:action.paylod}
        }else if(action.type ==="looding"){
                return {...state,looding:action.paylod}
        }else if(action.type ==="err"){
               return {...state,err:action.paylod}
        }
        else{
                return state
        }

}