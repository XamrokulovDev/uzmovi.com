import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from './context/UserContext';
import {navbarList}  from "../data"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RouterLayout from './layout/RouterLayout';
import Header from './components/header/Header';
import Card from './components/card/Card';
import Fantastik from './page/fantastik/Fantastik';
import Anime from './page/anime/Anime';
import Drama from './page/drama/Drama';
import Horror from './page/horror/Horror';
function App() {
  const [data, setData] = useState([]);
  const [card,setCard]=useState([])
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://movies-api14.p.rapidapi.com/movies',
        headers: {
          'X-RapidAPI-Key': 'fd08bb03abmshe1ca7d8d0736f60p1dac35jsn9394a85e2a59',
          'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        setData(response.data.movies);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData(); 
  }, []); 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout/>,
      children:[
       {
        index:true,
        element:<Header/>,
       },{
        path:"/Fantastik",
        element:<Fantastik/>,
       },
       {
        path:"/Anime",
        element:<Anime/>,
       },
       {
        path:"/Drama",
        element:<Drama/>,
      },
      {
       path:"/horror",
       element:<Horror/>,
      },
      {
       path:"/card",
       element:<Card card={card} />
      },
      ]
    },
  ]);

  return (
    <UserContext.Provider value={{data,navbarList, setCard}}> 
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}
export default App;
