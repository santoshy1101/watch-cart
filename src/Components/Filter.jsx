import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Analog, Digital, Chronograph in the UI
  const [searchParams,setSearchParams] = useSearchParams()
  const initState = searchParams.getAll('category')
  const [category,setCategory] =useState( initState ||  [])
  const handleChecked = (e)=>{
    let newCategory = [...category];
    const value = e.target.value;
    if(newCategory.includes(value)){
      newCategory = newCategory.filter((ele)=> ele !== value)
      setCategory(newCategory)
    }
    else{
      newCategory.push(value)
    }
    setCategory(newCategory)

  }

  useEffect(()=>{
  
      const params ={
        category
      }
      setSearchParams(params)
    
  },[category])
  // console.log(category)
  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input type="checkbox" value="Analog" onChange={handleChecked}
          checked={category.includes("Analog")}
          />
          <label>Analog</label>
        </div>
        <div>
          <input type="checkbox" value="Digital" onChange={handleChecked}
          checked={category.includes("Digital")}
          />
          <label>Digital</label>
        </div>
        <div>
          <input type="checkbox" value="Chronograph" onChange={handleChecked} checked={category.includes("Chronograph")} />
          <label>Chronograph</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
