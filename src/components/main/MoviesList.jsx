import React, { useEffect, useState } from 'react'
import MovieCard from '../Movies/MovieCard'
import { options } from '../../api/url'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay , Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

function MoviesList() {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/top_rated', options).then((res)=>setData(res.data))
    },[])
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-10">🎬 Top Rated Movies</h2>
        <Swiper 
        breakpoints={{
          320:{
             spaceBetween:10,
             slidesPerView:2,
          },
          640:{
              spaceBetween:5,
              slidesPerView:3,
          },
          768:{
              spaceBetween:10,
              slidesPerView:4,
          },
          1024:{
              spaceBetween:20,
              slidesPerView:6,             
          }
      }}
        modules={[Autoplay,Navigation]}
        // navigation={true}
        autoplay={{delay:6000}}
        loop
        centeredSlides
        css-mode="true"
        >
          <div className="overflow-x-auto whitespace-nowrap py-4 mt-10">
            {data.results?.map((item) => (
              <SwiperSlide key={item.id}>
                
                  <div className="mr-4 w-40 xl:w-48 md:w36">
                    <MovieCard item={item} />
                  </div>
                
              </SwiperSlide>
            ))}
          </div>
          
        </Swiper>
    </div>
  )
}
export default MoviesList