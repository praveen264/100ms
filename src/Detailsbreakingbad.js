import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Quotes from './Quotes';

const Detailsbreakingbad = () => {
    const {id}=useParams();
    const [listofdatas, listofdata] = useState([]);
    const [name, setName] = useState("");
    const [listofquotes, listofquote] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await Axios.get("https://www.breakingbadapi.com/api/characters/"+id);
            listofdata(request.data);
          
         
        }
        fetchData();
      
 
    }, []);
    console.log(listofdatas)
    console.log(listofquotes);
  return (
    <>

      <h1>Details of Characters</h1>
      <Link to='/itunes' className="btn btn-primary" >Back</Link>
  
     <div>
   {
       listofdatas.map((item)=>{
           return <>
           <table border="1" >
            <tr><td>Name: </td><td>{item.name}</td></tr>
          <tr><td>Profile Picture: </td><td><img src={item.img} style={{height: 100, width: 100}} /></td></tr>
        <tr><td>Date of birth</td><td>{item.birthday}</td></tr>
        <tr><td>Occupation</td><td>{item.occupation}</td></tr>
        <tr><td>Status</td><td>{item.status}</td></tr>
        <tr><td>Nick Name</td><td>{item.nickname}</td></tr>
        <tr><td>Actor Portrayed</td><td>{item.portrayed}</td></tr>
        <tr><td>Seasons Appeared</td><td>{item.appearance}</td></tr>
       <tr>
           <td>Quotes</td>
           <td><Quotes name={item.name}></Quotes></td>
           </tr>
          </table>
        
             </>
        
       })
   }
   </div>
   </>
  )
}

export default Detailsbreakingbad
