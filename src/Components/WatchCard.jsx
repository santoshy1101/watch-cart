import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addWatches, removeWatches } from "../Redux/AppReducer/action";

const WatchCard = ({ id ,watch}) => {

  const dispatch=useDispatch();
  const addWatchesData= useSelector((store)=>store.appReducer.addWatchesData)
  const watchAddHandler=(item,idx)=>{
   const newData= addWatchesData.map(el=>el.id==idx)
   if(!newData.includes(true)){
    dispatch(addWatches(item))
   }
   
  }

  // console.log(addWatchesData)
 
  const watchRemoveHandler=(id)=>{
    const  afterRemovedData=addWatchesData.filter((ele)=>ele.id != id)
    // console.log("wat",afterRemovedData)
    dispatch(removeWatches(afterRemovedData))
  }
  
  return (
    <div data-testid={`watch-card-wrapper-${id}`} className="flex-col p-4 px-2 py-4 border-4 border-dashed shadow-lg hover:shadow-fuchsia-500 rounded-xl bg-origin-border " >
      <div className="overflow-hidden h-[200px] group rounded-xl">
      <Link to={`/watches/${id}`}> <img data-testid="watch-card-image " src={watch.image} alt={watch.name} className="transition duration-200 object-cover ease-in rounded-lg hover:opacity-80 w-[100%] h-[100%] group-hover:scale-110 hover:ease-in " /></Link> 
      </div>
      <div>
        <div data-testid="watch-name">{watch.name}</div>
        <div data-testid="watch-category">{watch.category}</div>
      </div>
      <div className="flex justify-around mt-4 font-semibold">
      <button onClick={()=>watchAddHandler(watch,id)} className="px-4 py-2 duration-500 border border-dashed rounded-md hover:bg-green-300 hover:scale-y-90 animate-bounce">Add</button>
      <button onClick={()=>watchRemoveHandler(id)}  className="px-4 py-2 border border-dashed rounded-md hover:bg-red-300 animate-bounce">Remove</button>
      </div>
    </div>
  );
};

export default WatchCard;
