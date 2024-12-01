
import React, { useEffect, useState } from 'react'
import bg from './../public/bg.jpg'
import Logo from './../public/amazon.png'
export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await fetch('https://fakestoreapi.com/products/');
        const result = await response.json();

        // console.log(result);
        setData(result)

      } catch (error) {
        console.error(error);
      }
    };
    fetchData()

  },[])

  return (
    <div className='w-full h-screen bg-[#141920] flex flex-wrap justify-evenly overflow-x-hidden '>
      <img className='w-full h-full fixed top-0 left-0 object-contain' src={bg} alt="" />
      <div className='w-screen h-[100px] flex items-center pl-10 bg-[#232f3f] relative'>
        <input  className='order-2 w-5/12 h-[50px] pl-10 flex capitalize ml-24 outline-none' type="search" placeholder='search' />
        <img className='w-2/12 h-full object-contain' src={Logo} alt="" />
        <button className='order-3 bg-slate-500 p-2 px-10  text-white ml-28 '>More...</button>
      </div>
      {data && data.map(val => {
        console.log(val);
        return(
        <article className='w-5/12 h-[250px] bg-white relative z-10 flex flex-wrap justify-between my-5 shadow-xl shadow-black' >
          <img className='w-3/12 h-full bg-contain' src={val.image} alt="" />
          <p className='w-8/12 h-[100px] overflow-hidden font-serif'>{val.description}</p>
          <h1 className='w-4/12 font-bold absolute left-40 top-28'>price: ${val.price}</h1>
          <h2 className='absolute left-40 top-40'>count: {val.rating.count} <br /> rate: {val.rating.rate}</h2>
        </article>

        )
      })}

    </div>
  )


}


