import React, { useEffect, useRef, useState } from 'react';
import './DetailsAll.css';
import axios from 'axios';
import { Helmet } from 'react-helmet';

export default function DetailsAll({ id, type, onClose }) {
  const [Data, setData] = useState("");

  const modelRef = useRef();

  const closeModel = () => {
    onClose();
  };

  async function GetData() {
    try {
      let { data } = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=94c22ee1e86e2a9e4fa61b9198859905`);
      setData(data);
    } catch (error) {
      console.error("Error fetching details:", error);
    }
  }

  useEffect(() => {
    GetData();
  }, [id, type]);

  return (
    <>
      <div ref={modelRef} onClick={closeModel} className="con">
        <Helmet>
          <title>All-Details</title>
        </Helmet>
        <div className="contant" onClick={(e) => e.stopPropagation()}>
          <button className='close' onClick={onClose}>x</button>
          <div className="left">
            <img src={`https://image.tmdb.org/t/p/w500/${Data.poster_path}`} alt={Data.name || Data.title} />
          </div>
          <div className="right ml-2">
            <h1 className='fs-3'>{Data.name || Data.title}</h1>
            <p>{Data.overview}</p>
            <p className='text-center'>{Data.first_air_date || Data.release_date}</p>
            <div className='vote '>
              <p className='bg-primary p-2 rounded-1'>{Data.vote_average}</p>
              <p className='bg-primary p-2 rounded-1'>{Data.vote_count}</p>
              <p className='bg-primary p-2 rounded-1'>{Data.original_language}</p>
            </div>
            <p style={{ backgroundColor: "red", width: "fit-content", margin: "auto", padding: "2px 20px", borderRadius: "4px" }}>
              Popularity: {Data.popularity}
            </p>
            {type === "movie" && (
              <div className='vote' style={{ marginTop: "20px" }}>
                <p>Budget : {Data.budget}</p>
                <p>Revenue : {Data.revenue}</p>
                <p>Runtime : {Data.runtime} min</p>
              </div>
            )}
            <div className="link">
              <a href={Data.homepage} target='_blank' rel="noopener noreferrer"> See Video </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
