import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
    <RouterProvider router = {router}></RouterProvider>
    <div><Toaster/></div>
    </div>
  );
}

export default App;
