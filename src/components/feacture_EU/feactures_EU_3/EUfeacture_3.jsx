import "../feactures_EU_1/EUfeacture.css";
import beach from "./beach.png";
import useFetch from "../../../hooks/useFetch";
import {Link } from "react-router-dom";
import React from 'react';

const EUfeacture3 = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:5000/api/v1/events/eventbyjungle?eventjungle=Jungle",
   { method:"GET"
});
     console.log(data);
 
     return (
      <div className="fp">
        
        {loading ? (
          "loading"
        ) : (
          <>
         {data.map((item)=>(
        <div className="fpItem" key={item._id}>
          <img src={beach} alt="" className="fpImg"/>
          <div className="fpdate">
          <span className="fpName">{item.event_name}</span><br/>
          <span>Date :{item.starting_date}</span></div>
          <span className="fpCity">Location :{item.event_location}</span><br/>
          
          <span className="fptime">Time :{item.starting_time}</span>
          <Link to={`/event/${item._id}`}><span className="view"><button>view</button></span></Link>
          
        </div>
          ))}
        </>
        )}  
      </div>
    );
}

export default EUfeacture3;