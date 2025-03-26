import './App.css';
import Layout from './component/layout/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'; 
import Movie from './component/Movie/Movie';
import Tv from './component/Tv/Tv';
import Home from './component/Home/Home';
import { Offline, Online } from "react-detect-offline";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import Details from './component/Details/DetailsAll';

function App() {

  let x = createBrowserRouter([{
    path:'',element:<Layout/>,children:[
      {path:'/',element:<Movie/>},
      {path:'movie',element:<Movie/>},
      {path:'tv',element:<Tv/>},
      {path:'details/:id',element:<Details/>},
      {path:'*',element:<h1 className='d-flex justify-content-center align-item-center'>Error 404</h1>}
    ]
  }])
  
  return <div>
    <RouterProvider router={x} />
      <div className='text-white'>
      <Online className='text-center'> You're online </Online>
      <Offline className='text-center'>You Are Offline <FontAwesomeIcon icon={faWifi} size="1x" color="white" /> </Offline>
      </div>
  </div>
  

}


export default App;
