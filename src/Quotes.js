import Axios from 'axios';
import React, { useEffect, useState } from 'react'

const Quotes = ({name}) => {

    const [listofquotes, listofquote] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await Axios.get("https://www.breakingbadapi.com/api/quote?author="+name);
            listofquote(request.data);
          
         
        }
        fetchData();
      
 
    }, []);
console.log(listofquotes);

  return (
    <>
   {
       listofquotes!=''?
       listofquotes.map((item)=>{
           return <p>{item.quote}</p>
       })
       :
       'No Qutoes'
   }
    </>
  )
}

export default Quotes
