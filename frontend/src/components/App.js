import '../styles/App.css';
import Addnew_delete from './addnew_delete'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


/** import components */
import Main from './main';
import Quiz from './Quiz';
import Result from './Result';
import Addquestion from './addquestion';
import { CheckUserExist } from '../helper/helper';


/** react routes */
const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>
  },
  {
    path : '/quiz',
    element : <CheckUserExist><Quiz /></CheckUserExist>
  },
  {
    path : '/result',
    element : <CheckUserExist><Result /></CheckUserExist>
  },
  {
    path : '/addnew_delete',
    element : <Addnew_delete></Addnew_delete>
  },
  {
    path : '/addquestion',
    element : <Addquestion></Addquestion>
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;