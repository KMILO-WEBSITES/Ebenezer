import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Routes, Route } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import {Home} from './pages/home/Home';
import { Peoples } from './pages/about/Peoples';
import { History } from './pages/about/History';
import { Believe } from './pages/about/Believe';
import { SmallGroups } from './pages/ministeries/SmallGroups';
import { Women } from './pages/ministeries/Women';
import { Men } from './pages/ministeries/Men';
import { RoyalRangersKids } from './pages/ministeries/RoyalRangersKids';
import { Atalayas } from './pages/ministeries/Atalayas';
import { Misions } from './pages/ministeries/Misions';
import { Sermons } from './pages/streaming/Sermons';
import { Events } from './pages/events/Events';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/peoples' element={<Peoples />} />
        <Route path='/history' element={<History />} />
        <Route path='/believe' element={<Believe />} />
        <Route path='/groups' element={<SmallGroups />} />
        <Route path='/women' element={<Women />} />
        <Route path='/men' element={<Men />} />
        <Route path='/rangers' element={<RoyalRangersKids />} />
        <Route path='/sermons' element={<Sermons />} />
        <Route path='/atalayas' element={<Atalayas />} />
        <Route path='/events' element={<Events />} />
        <Route path='/misions' element={<Misions />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
