import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faCircleCheck, faHeadset, faMoneyBill, faFileContract } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="flex flex-col items-center lg:flex-row lg:justify-around">
        <div className="flex flex-col items-start w-screen lg:w-1/2 p-5 font-josefin-sans">
          <span className="text-3xl p-2">ViaChat</span>
          <span>
            <FontAwesomeIcon icon={faEnvelope} className="mr-4" />
            contato@viachat.com.br
          </span>
          <div>
          <span className="mt-5 text-sm">
            {" "}
            
              <FontAwesomeIcon icon={faLocationDot} className="mr-4" />
              Rua Odinéia Martins Viana, 30 Conjunto Planalto II Imperatriz - MA
            
          </span></div>
        </div>
        
        <div className="flex flex-col mb-5 font-semibold h-36 justify-around lg:mt-5">
        <span>
          <FontAwesomeIcon icon={faCircleCheck} className="h-5 mr-2" /> Aumento nas vendas
          </span>
          <span>
          <FontAwesomeIcon icon={faHeadset} className=" h-5 mr-2" /> Suporte dedicado
          </span>
          <span className="">
          <FontAwesomeIcon icon={faMoneyBill} className="h-5 mr-2" /> Pagamento 100% seguro
          </span>
          <span>
          <FontAwesomeIcon icon={faFileContract} className="h-5 mr-3" /> Termos e política de privacidade
          </span>
        </div>
        
       <img src='logo.png' className="w-1/6 lg:w-1/12 lg:mt-8"/>
        
      </div>
      <div className="font-josefin-sans mt-8 flex justify-center">
          
          <span className="font-semibold justify-center pb-4">
          ©2021 ViaChat. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

// <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
//       <ul>
//         <h1 className="text-2xl mb-2 font-bold">Produto</h1>
//         <li>
//           <a
//             className="text-gray-400 hover:text-teal-400
//         duration-300 text-sm cursor-pointer leading-6"
//             href="#"
//           >
//             Preço
//           </a>
//         </li>
//         <li>
//           <a
//             className="text-gray-400 hover:text-teal-400
//         duration-300 text-sm cursor-pointer leading-6"
//             href="#"
//           >
//             Recursos
//           </a>
//         </li>
//         <li>
//           <a
//             className="text-gray-400 hover:text-teal-400
//         duration-300 text-sm cursor-pointer leading-6"
//             href="#"
//           >
//             Central de Ajuda
//           </a>
//         </li>
//         <li>
//           <a
//             className="text-gray-400 hover:text-teal-400
//         duration-300 text-sm cursor-pointer leading-6"
//             href="#"
//           >
//             Desenvolvedores
//           </a>
//         </li>
//       </ul>
//       <ul>
//         <h1 className="text-2xl mb-2 font-bold">Legal</h1>
//         <li>
//           <a
//             className="text-gray-400 hover:text-blue-400
//         duration-300 text-sm cursor-pointer leading-6"
//             href="#"
//           >
//             Preço
//           </a>
//         </li>
//         <li>
//           <a
//             className="text-gray-400 hover:text-teal-400
//         duration-300 text-sm cursor-pointer leading-6"
//             href="#"
//           >
//             Política de privacidade
//           </a>
//         </li>
//         <li>
//           <a
//             className="text-gray-400 hover:text-teal-400
//         duration-300 text-sm cursor-pointer leading-6"
//             href="#"
//           >
//             Validador
//           </a>
//         </li>
//         <li>
//           <a
//             className="text-gray-400 hover:text-teal-400
//         duration-300 text-sm cursor-pointer leading-6"
//             href="#"
//           >
//             Validador de ITI
//           </a>
//         </li>
//       </ul>
//       <ul>
//         <h1 className="text-2xl mb-2 font-bold">Sobre o ViaChat</h1>
//         <li>
//           <a
//             className="text-gray-400 hover:text-teal-400
//         duration-300 text-sm cursor-pointer leading-6"
//             href="#"
//           >
//             Compania
//           </a>
//         </li>
//         <li>
//           <a
//             className="text-gray-400 hover:text-teal-400
//         duration-300 text-sm cursor-pointer leading-6"
//             href="#"
//           >
//             Vídeos
//           </a>
//         </li>
//       </ul>
//       <ul>
//         <h1 className="text-2xl mb-2 font-bold">Contato</h1>
//         <li>
//   <a
//     className="text-gray-400 hover:text-teal-400
// duration-300 text-sm cursor-pointer leading-6"
//     href="#"
//   >
//     <FontAwesomeIcon icon={faLocationDot} className="mr-4" /> Rua
//     Odinéia Martins Viana, 30 Conjunto Planalto II Imperatriz - MA
//   </a>
//         </li>
//         <li>
//           <a
//             className="text-gray-400 hover:text-teal-400
//         duration-300 text-sm cursor-pointer leading-6"
//             href="#"
//           >
//             <FontAwesomeIcon icon={faEnvelope} className="mr-4" />{" "}
//             contato@viachat.com.br
//           </a>
//         </li>
//       </ul>
//     </div>
//     <div
//       className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
//     text-center pt-2 text-gray-400 text-sm pb-8"
//     >
//       <span>©2021 ViaChat. All rights reserved.</span>
//     </div>
