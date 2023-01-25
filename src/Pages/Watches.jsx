import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import Filter from "../Components/Filter";
import WatchCard from "../Components/WatchCard";
import { getWatches } from "../Redux/AppReducer/action";

const Watches = () => {
  
  const dispatch = useDispatch()
  const watches = useSelector((store)=>store.appReducer.watches)
const loaction = useLocation()
const [searchParams] = useSearchParams()
  const initState = searchParams.getAll('category')
  useEffect(()=>{
    const paramsObject={
      params :{
        category:searchParams.getAll('category')
      }
    }


    dispatch(getWatches(paramsObject))

  },[loaction.search])
  return (
    <div className="flex justify-between px-4 mt-10">
    <div className="border-2 w-[20%] text-center ">
    <Filter />
    </div>
     
      <div className="grid grid-cols-4 gap-5 w-[70%]">
        {/* Map through the watch list here using WatchCard Component */}
        {
          watches.length > 0 && watches.map((ele)=>{
           return <WatchCard key={ele.id} id={ele.id} watch={ele} />
          })
        }
      </div>
    </div>
  );
};

export default Watches;
