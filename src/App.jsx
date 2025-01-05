import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Routes, Route } from 'react-router-dom';
import "../src/assets/css/base.css";
import "../src/assets/css/utils/variables.css";
import "../src/assets/css/utils/mixins.css";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { Events } from './pages/Events';

import { Shepherds } from './pages/us/Shepherds';
import { History } from './pages/us/History';
import { Believe } from './pages/us/Believe';

import { Groups } from './pages/ministries/Groups';
import { Women } from './pages/ministries/Women';
import { Men } from './pages/ministries/Men';
import { RoyalRangersKids } from './pages/ministries/RoyalRangersKids';
import { Worship } from './pages/ministries/Worship';
import { Young } from './pages/ministries/Young';
import { Dance } from './pages/ministries/Dance';
import { Intercession } from './pages/ministries/Intercession';
import { Kids } from './pages/ministries/Kids';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/shepherds' element={<Shepherds />} />
        <Route path='/history' element={<History />} />
        <Route path='/believe' element={<Believe />} />
        <Route path='/groups' element={<Groups />} />
        <Route path='/women' element={<Women />} />
        <Route path='/men' element={<Men />} />
        <Route path='/rangers' element={<RoyalRangersKids />} />        
        <Route path='/worship' element={<Worship />} />        
        <Route path='/young' element={<Young />} />
        <Route path='/dance' element={<Dance />} />
        <Route path='/intercession' element={<Intercession />} />
        <Route path='/kids' element={<Kids />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
