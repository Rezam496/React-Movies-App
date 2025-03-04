import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/swiper-bundle.css';
// import './custom-swiper-styles.css';
import { options } from '../../api/url';


const Example = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/popular', options).then((res)=>setData(res.data))
    },[])
    console.log(data)
  return (
    <div className="container mt-10"> 
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={
            {nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',}
        }
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        
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
  );
};

export default Example;
