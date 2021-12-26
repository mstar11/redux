export const getData =(state=[],action2)=>{
        if(action2.type === "getdata"){
                return action2.paylod
        }else if(action2.type === "changeData"){
                return action2.paylod

        }else{
                return state
        }



}