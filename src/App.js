import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <h1>error</h1>,
    children: [
      {
        index: true,
        element: <Rockets />,
      },
      {
        path: '/missions',
        element: <Missions />,
      },
      {
        path: '/my-profile',
        element:<MyProfile />
      }
    ],
  },

])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
