import React, { useEffect, useState } from 'react'
import './Banner.css'
import instance from '../instance';

function Banner({fetchUrl}) {

   // console.log(fetchUrl);
   const[movies,setMovies]=useState()


     const base_url = "https://image.tmdb.org/t/p/original/";
    const fetchData=async()=>{
        const {data}=await instance.get(fetchUrl)
       setMovies(data.results[Math.floor(Math.random()*data.results.length)]);
    }
    console.log(movies);
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <>
      <div style={{ height: "600px", backgroundImage: `url(${base_url}${movies?.backdrop_path})`, backgroundPosition: "center", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
        <div className="banner-content">
          <h1 className='mb-3'>{movies?.original_title}</h1>
          <button className="btn btn-danger">
            Play <i class="fa-solid fa-play"></i>
          </button>
          <button className="btn border-white ms-3 more">More Info <i class="fa-solid fa-caret-down"></i></button>
          <h2>{movies?.overview?.slice(0, 200)}...</h2>
        </div>
      </div>
    </>
  );
}

export default Banner