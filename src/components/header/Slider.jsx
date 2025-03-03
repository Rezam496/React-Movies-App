import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay ,  } from 'swiper/modules';
import { options } from '../../api/url';
import axios from 'axios';

function Slider({setBackground}) {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/popular', options).then((res)=>setData(res.data))
    },[])
  return ( 
    <div className="container mt-10"> 
        <Swiper
        breakpoints={{
            640:{
                spaceBetween:20,
                slidesPerView:1,
            },
            768:{
                spaceBetween:30,
                slidesPerView:2,
            },
            1024:{
                spaceBetween:40,
                slidesPerView:3,
                
            }
        }}
        modules={[Autoplay]}
        autoplay={{delay:4000}}
        loop
        css-mode="true" 
        >
        {data.results?.map((i)=>
         <SwiperSlide key={i.id} onMouseOver={(e)=>setBackground(`https://image.tmdb.org/t/p/w500${i.backdrop_path}`)}>
            <img src={`https://image.tmdb.org/t/p/w500${i.backdrop_path}`} alt='turn on VPN' className="w-full rounded-lg " />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 w-full text-white p-2 ">
                <h3 className="text-lg  font-semibold">{i.title}</h3>
                <div className="flex items-center">
                    <span className="mr-2">★ {i.vote_average}</span>
                    <span>({i.vote_count} votes)</span>
                </div>
                <div className="mt-1 text-sm">Rated: {i.adult ? "Adult" : "All Ages"}</div>
            </div>
        </SwiperSlide>
        )}
        </Swiper>
    </div> 
  )
}

export default Slider