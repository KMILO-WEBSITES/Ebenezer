import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Routes, Route } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { Sermons } from './pages/Sermons';
import { Events } from './pages/Events';

import { Shepherds } from './pages/us/Shepherds';
import { History } from './pages/us/History';
import { Believe } from './pages/us/Believe';

import { Groups } from './pages/ministeries/Groups';
import { Women } from './pages/ministeries/Women';
import { Men } from './pages/ministeries/Men';
import { RoyalRangersKids } from './pages/ministeries/RoyalRangersKids';
import { Worship } from './pages/ministeries/Worship';
import { Youths } from './pages/ministeries/Youths';
import { Dance } from './pages/ministeries/Dance';
import { Intercession } from './pages/ministeries/Intercession';
import { Kids } from './pages/ministeries/Kids';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sermons' element={<Sermons />} />
        <Route path='/events' element={<Events />} />
        <Route path='/shepherds' element={<Shepherds />} />
        <Route path='/history' element={<History />} />
        <Route path='/believe' element={<Believe />} />
        <Route path='/groups' element={<Groups />} />
        <Route path='/women' element={<Women />} />
        <Route path='/men' element={<Men />} />
        <Route path='/rangers' element={<RoyalRangersKids />} />        
        <Route path='/worship' element={<Worship />} />        
        <Route path='/youths' element={<Youths />} />
        <Route path='/dance' element={<Dance />} />
        <Route path='/intercession' element={<Intercession />} />
        <Route path='/kids' element={<Kids />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
