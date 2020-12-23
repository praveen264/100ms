import { Search } from '@material-ui/icons';
import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import Pagination from "react-js-pagination";
import { Link } from 'react-router-dom';
import './Breakingbad.css';
const Breakingbad = () => {

   const [value,setSearch]=useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const recordPerPage = 10;
 
  const totalRecords=63;
  
  const pageRange = 10;
 
  
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
    
    async function fetchData() {
        const request = await Axios.get("https://www.breakingbadapi.com/api/characters?limit=10&offset="+currentPage);
        listofdata(request.data)
    }
    fetchData();
  }

  const search = async(event)=>{
     event.preventDefault();
     const request = await Axios.get("https://www.breakingbadapi.com/api/characters?name="+value+"&limit=10");
     listofdata(request.data)
  }

  const searchcategory = async(event)=>{
    event.preventDefault();
    const request = await Axios.get("https://www.breakingbadapi.com/api/characters?category="+value+"&limit=10");
    listofdata(request.data)
 }


    const [listofdatas, listofdata] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await Axios.get("https://www.breakingbadapi.com/api/characters/?limit=10&offset=1");
            listofdata(request.data);
        }
        fetchData();
      
 
    }, []);
   
console.log(listofdatas);

  return (
    <>
      <h1 className="text-center">Welcome to breaking bad</h1>
   
      <div className="text-center">
        <span className="col-sm-3 col-md-3">
           <input type="text" placeholder="Search by name" onChange={(event)=>setSearch(event.target.value)}></input>
    </span>
    <span  className="col-sm-3 col-md-3">
    <button type="button" className="btn btn-success" onClick={search}>Search</button>
   
    </span>
<br></br><br></br>
    <span className="col-sm-3 col-md-3">
           <input type="text" placeholder="Search by category" onChange={(event)=>setSearch(event.target.value)}></input>
    </span>
    <span  className="col-sm-3 col-md-3">
    <button type="button" className="btn btn-success" onClick={searchcategory}>Search by category</button>
   
    </span>
      </div>
     
      <br></br>
    <table className="table table-bordered ">
        <tr>
           <td>Name</td>
           <td>Occupation</td>
           <td>Date of birth</td>
           <td>Status</td>
           <td>View</td>
        </tr>
  
    
      {
        listofdatas!=''?
          listofdatas.map((item)=>{
              return <tr>
                  <td>{item.name}</td>
                  <td>{item.occupation}</td>
                  <td>{item.birthday}</td>
                  <td>{item.status}</td>
                  <td>
                    <Link to={'/viewdetails/'+item.char_id} className="btn btn-primary">View Details</Link>
                  </td>
              </tr>
          })
          :
         <td colSpan="5">No datas</td>
      }


        </table>
        <br></br>

        <Pagination
        itemClass="page-item" // add it for bootstrap 4
        linkClass="page-link" // add it for bootstrap 4
        activePage={currentPage}
        itemsCountPerPage={recordPerPage}
        totalItemsCount={totalRecords}
        pageRangeDisplayed={pageRange}
        onChange={handlePageChange}
      />

    
    </>
    
  )
}

export default Breakingbad
