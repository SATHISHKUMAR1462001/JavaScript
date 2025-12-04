import { useEffect, useState } from "react";

import axios from 'axios';

 function  useFeatch(){
    let url='https://fakestoreapi.com/products'
    let uel2="https://gist.githubusercontent.com/jsturgis/3b19447b304616f18657/raw/a8c1f60074542d28fa8da4fe58c3788610803a65/gistfile1.txt"
    let [data,setData]=useState()
    let [loading,setLoading]=useState(true)
    let [error,setErroe]=useState()
    useEffect(()=>{

        let response=axios.get(uel2).catch((e)=>{setErroe(e)}).then((e)=>{setData(e.data)})
        //setData(response.datas)
        
        setLoading(false)
        

    },[])
       
  
 
    
return { data,error,loading}

}

export default useFeatch;






