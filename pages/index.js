import NavBar from './components/NavBar';
import Body from './components/Body/Body';
import Footer from './components/Footer';
import ScrollButton from './components/ScrollButton';
import { FaleConosco } from './components/FaleConosco';




export default function Home() {
  
  
  return (
    <>
    <div className='overflow-hidden'>
    
               
       <NavBar />
       <Body />
       <FaleConosco />
       <Footer /> 
       <ScrollButton />
       
       
    </div>
    </>
  );
}
