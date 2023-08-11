import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Root from './routes/Root';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import Rockets from './components/RocketsList';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
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
        element: <MyProfile />,
      },
    ],
  },

]);
function App() {
  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
