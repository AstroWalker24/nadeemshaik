import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Combination';
import Sample from './components/Sample';


function App() {

  return (
    <>
   <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sample' element={<Sample/>}/>
     </Routes>
   </BrowserRouter>
      </>
  )
}

export default App
