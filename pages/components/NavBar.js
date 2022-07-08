import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronDown,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useState } from "react";

export default function NavBar() {
  let [open, setOpen] = useState(false);
 
  return (
    <>
      <nav className=" container flex items-center py-0 mt-0 sm:mt-12 
     " id='inicio'>
        <div className="py-1 flex items-center">
          <img src="logo-resize.jpg" className='w-1/6'/>
          <span className="ml-4 font-extrabold 
          text-transition-gb text-2xl font-Poppins">Vinicius Dev.</span>
        </div>
        <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-12 cursor-pointer sm:hidden"
          >
            <FontAwesomeIcon
              icon={open ? faXmarkCircle : faCircleChevronDown}
            />
          </div>
        <ul className={`sm:flex flex-1 justify-end
        items-center gap-12 uppercase text-xs ${
          open ? "flex flex-col absolute top-28 z-20 bg-white p-2 w-full " : "hidden"
        }`}>
        <AnchorLink href="#produto" className="hover:text-green-800 duration-300">Produto</AnchorLink>
        <AnchorLink href="#preco" className="hover:text-green-800 duration-300">Preço</AnchorLink>
        <AnchorLink href="#faq" className="hover:text-green-800 duration-300">Dúvidas</AnchorLink>


<a className="name-viachat" href={`https://www.linkedin.com/in/vinicius--frança/`} target="_blank">Curtiu?</a>
        </ul>
 
      </nav>
    </>
  );
}

// NAVBAR-1
// <div className="shadow-md w-full fixed top-0 left-0 z-20">
//         <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
//           <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
//             <span className="text 3x1 text-blue-logo mr-1 pt-2">
//               <img className="w-10" src="logo.png" />
//             </span>

//           </div>
//           <div
//             onClick={() => setOpen(!open)}
//             className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
//           >
//             <FontAwesomeIcon
//               icon={open ? faXmarkCircle : faCircleChevronDown}
//             />
//           </div>
//           <ul
//             className={`md:flex  md:items-center  md:pb-0 pb-3
//                 absolute md:static bg-white md:z-auto z-[-1]
//                 left-0 w-full md:w-auto md:pl-0 pl-9
//                 transition-all duration-500 ease-in font-comfortaa
//                 ${
//                   open ? "top-20 opacity-100 " : "top-[-490px]"
//                 } md:opacity-100 opacity-80`}
//           >
//             <li className="md:ml-8 text-xl text-gray-800 hover:text-transition-gb duration-500 md:my-0 my-7">
//                 <button className="">Como funciona?</button>

//             </li>
//             <li className="md:ml-8 text-xl text-gray-800 hover:text-transition-gb duration-500 md:my-0 my-7">
//                 <button className="">Produto</button>

//             </li>

//             <li className="md:ml-8 text-xl text-gray-800 hover:text-transition-gb duration-500 md:my-0 my-7">
//                 <button className="">Entrar</button>

//             </li>
//             <li className="md:ml-8 text-gray-800 hover:text-transition-gb duration-500 md:my-0 my-7">
//               <button onClick={msg} className="button text-sm whitespace-nowrap">Teste Grátis</button>
//             </li>
//           </ul>
//         </div>
//       </div>
