import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Facts from './Pages/Facts';
import Country from './Pages/Country';
import Contact from './Pages/Contact';
import { RouterProvider } from 'react-router';
import AppLayout from './Components/Layout/AppLayout';
import CountryDetails from './Components/Layout/CountryDetails';
import ErrorPage from './Pages/ErrorPage';



function App() {
  const myRouter = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"facts",
          element:<Facts/>
        },
        {
          path:"country",
          element:<Country/>
        },
        {
          path: "country/:id",
          element: <CountryDetails/>,
        },
        {
          path:"contact",
          element:<Contact/>
        }
      ]
    }
    
  ])
  return (
    <>
      <RouterProvider router={myRouter}></RouterProvider>
    </>
  );
}


export default App;
