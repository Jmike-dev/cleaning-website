import './App.css';
import FooterSection from './layout/Footer/FooterSection';
import HeaderSection from './layout/Header/HeaderSection';
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
   <>
   <BrowserRouter>
    <HeaderSection/>
   <FooterSection/>
   </BrowserRouter>
   </>
  );
}

export default App;
