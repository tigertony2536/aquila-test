import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components';
import { HomePage, ContactPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/profile',
        element: <HomePage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
