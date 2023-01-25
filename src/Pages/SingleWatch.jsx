import { Category } from "@material-ui/icons";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleWatch = () => {
  const [data,setData] = useState({})
  const {id} = useParams()
  const watches = useSelector((store)=>store.appReducer.watches) 

  useEffect(()=>{
    if(watches){
      const watch = watches.find((ele)=>ele.id === +id) 
      setData(watch)
    }

  },[])
  return (
    <div className="flex flex-col items-center h-screen py-8">
      <h2>{data.name}</h2>
      <div className="w-[30%]">
        <img src={data.image}alt={data.name} className="w-full rounded-full " />
      </div>
      <div>
        <div>{data.category}</div>
      </div>
    </div>
  );
};

export default SingleWatch;
