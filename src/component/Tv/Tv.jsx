import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ClockLoader } from "react-spinners";
import { shanta } from '../../context/Context';
import { Helmet } from 'react-helmet';
import DetailsAll from '../Details/DetailsAll';

export default function TV() {
  const [DataTV, setDataTV] = useState(null);
  const [ShowModel, setShowModel] = useState(false);
  const [SelectedTVId, setSelectedTVId] = useState(null);

  let { GetDataInp, DataInp, show } = useContext(shanta);

  async function GetDataTV() {
    try {
      let { data } = await axios.get(`https://api.themoviedb.org/3/${show}/tv?api_key=94c22ee1e86e2a9e4fa61b9198859905`, {
        params: {
          query: DataInp
        }
      });
      setDataTV(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    GetDataTV();
  }, [GetDataInp]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 7,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  const handleImageClick = (id) => {
    setSelectedTVId(id);
    setShowModel(true);
  };

  const handleCloseModal = () => {
    setShowModel(false);
    setSelectedTVId(null);
  };

  return (
    <>
      {DataTV ? (
        <div className="container mt-4">
          <Helmet>
            <title>Tv</title>
          </Helmet>

          <Slider {...settings}>
            {DataTV.map((item, index) => (
              <img key={index} src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className="w-75 rounded-3" alt={item.name} onClick={() => handleImageClick(item.id)} />
            ))}
          </Slider>
          <div className="row">
            <div className='text-center text-white'>
              <h1>Trending</h1>
              <h2>TV</h2>
              <h3>To Watch Now</h3>
            </div>
            {DataTV.filter((item) => item.poster_path !== null).map((item, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 p-2" key={index}>
                <div className="card h-100">
                  <div className='overflow-hidden'>
                    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className="card-img-top w-100" alt={item.name} onClick={() => handleImageClick(item.id)} />
                  </div>
                  <div className="card-body bg-dark text-white">
                    <h5 className="text-center">{item.name}</h5>
                    <div className="position-absolute top-0 end-0 p-1 bg-info rounded-1">
                      vote_average: {item.vote_average.toFixed(1)}
                    </div>
                    <div className="position-absolute top-0 start-0 p-1 bg-info rounded-1">
                      Vote_Count: {item.vote_count}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {ShowModel && <DetailsAll id={SelectedTVId} type="tv" onClose={handleCloseModal} />}
          </div>
        </div>
      ) : (
        <div className='d-flex justify-content-center align-items-center vh-100 text-white'>
          <ClockLoader color="#ffffff" />
        </div>
      )}
    </>
  );
}
