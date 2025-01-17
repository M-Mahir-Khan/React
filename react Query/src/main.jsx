import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from './Products.jsx'
import Product from './Product.jsx'


import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const router = createBrowserRouter([
  {
      path: '/',
      element: <App />,
  },
  {
      path: '/products',
      element: <Products />,
  },
  {
      path: '/products/:productId',
      element: <Product />,
  },
]);


const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
<QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
</QueryClientProvider>
)
