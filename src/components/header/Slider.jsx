import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination  } from 'swiper/modules';
import { options } from '../../api/url';
import axios from 'axios';
import { shortenText } from '../../helper/helper';
import 'swiper/css';
import 'swiper/css/pagination';

function Slider({setBackground}) {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/popular', options).then((res)=>setData(res.data))
    },[])
  return ( 
    <div className="container mt-10"> 
        <Swiper pagination={true} modules={[Pagination]} className="w-full h-full">
        {data.results?.map((i)=>
         <SwiperSlide key={i.id} onMouseOver={(e)=>setBackground(`https://image.tmdb.org/t/p/w500${i.backdrop_path}`)}>
            <img src={`https://image.tmdb.org/t/p/w500${i.backdrop_path}`} alt='turn on VPN' className="w-full rounded-lg " />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 w-full text-white p-2 ">
                <h3 className="text-lg  font-semibold">{shortenText(i.title)}</h3>
                <div className="flex items-center">
                    <span className="mr-2 text-yellow-300">{`★ ${i.vote_average.toFixed(1)}/10`}</span>                   
                </div>               
            </div>
        </SwiperSlide>
        )}
        </Swiper>
    </div> 
  )
}

export default Slider