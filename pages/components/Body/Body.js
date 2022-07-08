import CardPrice from "./CardPrice";
import Duvidas from "./Duvidas";
import Produto from "./Produto";
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Body() {

  return (
   
    <>
    {/* Hero */}
      <section className="relative">
        <div
          className="container flex flex-col-reverse 
        lg:flex-row items-center gap-6 mt-14 lg:mt-28"
        >
          {/* Content */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            
            <h2
              className="text-3xl md:text-4 
  lg:text-5xl text-center lg:text-left mb-6"  
            >
              
              Quanto mais eu aprendo  mais vejo que nada sei
            </h2>
            
            <p className="text-gray-500 text-lg text-center lg:text-left mb-6">
             
            </p>
            
            <div className="flex justify-center flex-wrap gap-6">
              <a className="btn btn-blue hover:bg-green-logo" href={`https://app.viachat.com.br/sign-in`} target="_blank">Teste grátis</a>
              <AnchorLink href="#preco" className="btn btn-transition hover:bg-gray-200 hover:text-black">Veja os Preços</AnchorLink>
            </div>
          </div>
          {/* Image */}
          <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
<img className="w-5/6 h-5/6 sm:w-3/4 sm:3/4 md:w-full md:h-full rounded-lg" src='secretary.jpg' alt="atendimento" />
          </div>
          {/* Rounded Rectangle */}
          <div className="hidden md:block overflow-hidden 
          bg-gray-400 rounded-l-full absolute h-80 w-1/2 top-32 right-0 lg:-bottom-28 lg:-right-36">
          </div>
        </div>
        <Produto />
        
        <CardPrice />
        <Duvidas  className='duvidas'/>
        
      </section>
    </>
  );
}

{
  /*  */
}
{
  /* Corpo de modelo 1
  
  <div className="mt-24 lg:flex lg:justify-around">
<img className="mb-8 w-1/2 lg:mb-0" src="atendentes-removebg.png" />
  <div className="flex-col items-center justify-center pb-5">
    <h3 className="text-3xl font-patrick-hand font-semibold p-5 text-center lg:text-5xl lg:text-left">
      Toda sua equipe atendendo <br></br>EM UM SÓ LUGAR
    </h3>
    <div className="font-poppins font-medium mt-2 p-2 text-center text-lg lg:text-2xl">
     Com o ViaChat o que <b>VOCÊ GANHA?</b> <br></br>Coloca quantos operadores quiser <br></br><span className="font-semibold">ATENDENDO SIMULTANEAMENTE</span> <br></br>em vários canais de atendimento em<br></br><span className="font-semibold">UM ÚNICO LUGAR</span>.
    </div>
   
  </div>
  <div className="w-full flex justify-center lg:flex-col lg:justify-end lg:hidden">
  <button className="button font-bold text-sm w-1/2 mb-5 lg:w-full lg:h-16 lg:flex">
      Teste grátis agora mesmo
    </button>
    </div>
   <BodyPart2 />
  <BodyPart3 />
  <BodyPart4 />
  <BodyPart5 />
  <BodyPart6 /> 
</div> */
}

// Corpo de modelo 2
{
  /* <div className="relative w-full min-h-screen p-24 lg:flex justify-between items-center">
      <div className="relative lg:w-full lg:flex justify-between items-center">
          <div className="relative lg:pr-12">
            
            <h3 className="mt-5 mb-5 lg:ml-5 lg:text-left 
            font-josefin-sans 
            lg:text-2xl text-xl">Reinvente-se com o <b className="text-blue-logo">moderno</b></h3>
            <h3 className="mt-5 mb-5 lg:ml-5 lg:text-left 
            font-josefin-sans 
            lg:text-2xl text-xl">Expanda suas <b className="text-green-logo">vendas</b></h3>
            <h3 className="mt-5 mb-10 lg:ml-5 lg:text-left 
            font-josefin-sans 
            lg:text-2xl text-xl flex"><b className="text-gray-900">Use</b><span className="name-viachat ml-8 h-1/2 font-semibold">ViaChat</span></h3>
            
          </div>
          <div  className="lg:justify-end lg:pr-12 w-full justify-center flex">
            <img src={img} className=" lg:max-w-4xl md:max-w-2xl max-w-xs mt-12 mb-5 lg:mt-0"/>
          </div>
          <a href="#" className="button lg:hidden">Teste Grátis</a>
      </div>
      <ul className="absolute left-1/2 bottom-5 -translate-x-1/2 lg:flex hidden lg:visible md:visible">
        <li className="li-org"><img src='atendentes-removebg.png' className="li-img" onClick={() => imgSlider('atendentes-removebg.png')}/></li>
        <li className="li-org"><img src='home.png' className="li-img" onClick={() => imgSlider('home.png')}/></li>
        <li className="li-org"><img src='atendimento.png' className="li-img" onClick={() => imgSlider('atendimento.png')}/></li>
        <li className="li-org"><img src='analytics.png' className="li-img" onClick={() => imgSlider('analytics.png')}/></li>
        <li className="li-org"><img src='contatos.png' className="li-img" onClick={() => imgSlider('contatos.png')}/></li>
      </ul>
     </div> */
}
// Corpo modelo 3
// <div className="flex justify-center">
//           <span className="lg:text-4xl md:text-3xl font-bold text-2xl text-center ">
//             Toda sua equipe atendendo em um só lugar
//           </span>
//         </div>
//         <div className="flex justify-center font-montserrat mt-5 mb-5">
//           <span className="lg:w-1/3 text-sm font-semibold text-center tracking-widest">
//             Com o <span className="name-viachat">ViaChat</span> você coloca
//             quantos operadores quiser atendendo simultaneamente em vários canais
//             de atendimento em um único lugar
//           </span>
//         </div>
//         <div className="flex-col ml-20">
//         <div className="flex mb-20">
//           <Card
//             name_img={"vantagens1.png"}
//             text={"Centralize a comunicação da sua empresa"}
//             text2={
//               " Todo seu time atendendo em um único número WhatsAppsimultaneamente, com um chat interno em tempo real."
//             }

//           />
//           <Card
//             name_img={"vantagens2.png"}
//             text={"Organize as conversas dos times por setores"}
//             text2={
//               " Crie setores para segmentar seus leads no chat e organize os canais de atendimento da sua empresa."
//             }

//           />
//           <Card
//             name_img={"vantagens3.png"}
//             text={"Atendimento automatizado e colaborativo"}
//             text2={
//               "Agende o envio de mensagens para datas futuras. E se preciso, transfira a conversa para outro atendente com um clique."
//             }

//           />
//           </div>
//         <div className="flex mb-5">
//           <Card
//             name_img={"vantagens4.png"}
//             text={"Adicione etiquetas e filtre suas conversas"}
//             text2={
//               " Crie etiquetas personalizadas e associe a clientes. Então filtre as conversas e atribua ao membro certo da equipe"
//             }

//           />
//           <Card
//             name_img={"vantagens5.png"}
//             text={"Agilize seus primeiros segundos de interação"}
//             text2={
//               " Crie um banco de mensagens rápidas e envie para seus clientes com apenas um comando. Não o deixe esperando!"
//             }

//           />
//           <Card
//             name_img={"vantagens6.png"}
//             text={"Gerenciamento de permissões e visualização"}
//             text2={
//               "Crie um banco de mensagens rápidas e envie para seus clientes com apenas um comando. Não o deixe esperando!"
//             }

//           />
//           </div>
//           </div>
//           <BodyPart2 />
