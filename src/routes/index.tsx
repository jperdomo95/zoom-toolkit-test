import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Preview from './Preview'
import Call from './Call'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Preview />,
  },
  {
    path: '/call',
    element: <Call />,
  },
])

export default function Router() {
  return <RouterProvider router={router} />
}
