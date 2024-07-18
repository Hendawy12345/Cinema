import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Home.css';

export default function Home() {
  const [DataMovie ,setDataMovie] = useState([])
  const [DataTv ,setDataTv] = useState([])
  const [DataPerson ,setDataPerson] = useState([])

  async function GetDataMovie(){

  let {data} =  await    axios.get("https://api.themoviedb.org/3/discover/movie?api_key=94c22ee1e86e2a9e4fa61b9198859905")

  setDataMovie(data.results)

  }
  async function GetPerson(){

  let {data} =  await    axios.get("https://api.themoviedb.org/3/discover/person?api_key=94c22ee1e86e2a9e4fa61b9198859905")

  setDataPerson(data.results)

  }
  async function GetDatatv(){

  let {data} =  await    axios.get("https://api.themoviedb.org/3/discover/tv?api_key=94c22ee1e86e2a9e4fa61b9198859905")

  setDataTv(data.results)

  }

  useEffect(() => {
    GetDataMovie()
    GetDatatv()
    GetPerson()
  },[])

  return (
    <>
    

        <div className="container">
          <div className="row">
            <div className='text-center text-white'>
              <h1 >Trending</h1>
              <h2 className='fs-1'>Movie and Tv</h2>
              <h3 className='fs-4'>Most watched</h3>
            </div>
            {DataMovie.map((item,index)=>{
            return(
              <div className="col-lg-3 col-md-4 col-sm-6 p-2" key={index}>
                <div className="card h-100">
                  <div className='overflow-hidden'>
                  <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className="card-img-top" alt={item.original_title} />
                  </div>
                  <div className="card-body bg-dark text-white">
                    <h5 className="text-center">{item.title}</h5>
                  </div>
                </div>
              </div>
            )
          })
        }

        {DataTv.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 p-2">
            <div className="card h-100 bg-dark text-white">
            <div className='overflow-hidden'>
              <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className="card-img-top" alt={item.name} />
            </div>
              <div className="card-body">
                <h5 className="text-center">{item.name}</h5>
              </div>
            </div>
          </div>
          ))}
        {DataPerson.map((item,index)=>{
            return(
              <div className="col-lg-3 col-md-4 col-sm-6 p-2" key={index}>
                <div className="card h-100">
                <div className='overflow-hidden'>
                  <img src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} className="card-img-top" alt={item.original_title} />
                  </div>
                  <div className="card-body bg-dark text-white">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="text-center ">{item.name}</p>
                  </div>
                </div>
              </div>
            )
          })
        }

          </div>
        </div>


    
    </>
  )
}
