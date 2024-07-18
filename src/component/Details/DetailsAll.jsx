import React, { useEffect, useRef, useState } from 'react';
import './DetailsAll.css';
import axios from 'axios';
import { Helmet } from 'react-helmet';

export default function DetailsAll({ id, onClose }) {
  const [Data, setData] = useState("");

  const modelRef = useRef();

  const closeModel = () => {
    onClose();
  }

  async function GetData() {
    
      let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=94c22ee1e86e2a9e4fa61b9198859905`);
      setData(data);

  }

  useEffect(() => {
    GetData();
  }, [id]);

  return (
    <>
      <div ref={modelRef} onClick={closeModel} className="con">
        <Helmet>
          <title>All-Details</title>
        </Helmet>
        <div className="contant" onClick={(e) => e.stopPropagation()}>
          <button className='close' onClick={onClose}>x</button>
          <div className="left">
            <img src={"https://image.tmdb.org/t/p/w500/" + Data.poster_path} alt="" />
          </div>
          <div className="right ml-2">
            <h1 className='fs-3'>{Data.title}</h1>
            <p>{Data.overview}</p>
            <p className='text-center'>{Data.release_date}</p>
            <div className='vote '>
              <p className='bg-primary p-2 rounded-1'>{Data.vote_average}</p>
              <p className='bg-primary p-2 rounded-1'>{Data.vote_count}</p>
              <p className='bg-primary p-2 rounded-1'>{Data.original_language}</p>
            </div>
            <p style={{ backgroundColor: "red", width: "fit-content", margin: "auto", padding: "2px 20px", borderRadius: "4px" }}>popularity:{Data.popularity}</p>
            <div className='vote' style={{ marginTop: "20px" }}>
              <p>Budget : {Data.budget}</p>
              <p>Revenue : {Data.revenue}</p>
              <p>Runtime : {Data.runtime} Hr</p>
            </div>
            <div className="link">
              <a href={Data.homepage} target='_blank' rel="noopener noreferrer"> See Vedio </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
