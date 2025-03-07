import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination,Autoplay  } from 'swiper/modules';
import { options } from '../../api/url';
import axios from 'axios';
import { shortenText } from '../../helper/helper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

function Slider({setBackground}) {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/popular', options).then((res)=>setData(res.data))
    },[])
  return ( 
    <div className="relative xl:-mt-10"> 
        <Swiper pagination={true} autoplay={true} modules={[Pagination,Autoplay]} className="w-full h-full">
        {data.results?.map((i)=>
         <SwiperSlide key={i.id} onMouseOver={(e)=>setBackground(`https://image.tmdb.org/t/p/w500${i.backdrop_path}`)}>
            <Link to={`/details/:${i.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${i.backdrop_path}`} alt='turn on VPN' className="w-full  " />
            </Link>
        </SwiperSlide>
        )}
        </Swiper>
        <div className="container flex text-white  ">
        <Link to="/" className="absolute bg-slate-600 bg-opacity-60  top-8 left-4 right-4 xl:top-44 xl:right-20 xl:left-20 z-10 rounded-xl p-4">
            <h1 className="text-xl xl:text-4xl text-white cursor-pointer">React <span className="text-red-500">Movies</span> App</h1>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima repellat libero at necessitatibus, ipsa corrupti dolore...</p>
            <button className="p-2 bg-red-600 rounded-2xl mt-2">Read more..</button>
        </Link>
        </div>
    </div> 
  )
}

export default Slider