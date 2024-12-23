// import axios from "axios";
import { useEffect, useState } from "react";
import { XAxis } from "recharts";

const Phones = () => {
  const [phones, setPhones] =useState([])
  useEffect( () => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res => res.json())
    // .then(data => setPhones(data.data))

    XAxis.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data => {
      
    })
    
  } , [])

  

  return (
    <div>
       <h2 className="text-3xl">Phones: {phones.length} </h2>
    </div>
  );
};

export default Phones;
