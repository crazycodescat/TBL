import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Loaders
import categoryLoader from './loaders/CategoryLoader';
import productLoader from './loaders/ProductLoader';

// Pages
import Products from './pages/Main/Products';
import Product from './pages/Main/Product';
import Cart from './pages/Main/Cart';
import HomePage from './pages/Main/HomePage';
import Collections from './pages/Main/Collections';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import Login from './pages/Main/Login';
import Signup from './pages/Main/Signup';

//Components

// Contexts
import { AuthContextProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

// Styles
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'collections',
        element: <Collections />,
      },
      {
        path: 'collections/:collectionName',
        element: <Products />,
        loader: categoryLoader,
      },
      {
        path: 'collections/:collectionName/:productId',
        element: <Product />,
        loader: productLoader,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
    ],
  },
]);

function App() {
  return (
    <AuthContextProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthContextProvider>
  );
}

export default App;
