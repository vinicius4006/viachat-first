import React, { useCallback, useEffect } from "react";
import { IconButton } from "@material-ui/core";
import {
  Add,
  Remove,
} from "@material-ui/icons";
import {RangeStepInput} from 'react-range-step-input';


function PlataformaCalculoPreco(props) {
  const [quantidade, setQuantidade] = React.useState(
    props.plataforma.quantidade
  );

  useEffect(() => {
    props.atualizarQuantidadePlataforma(props.indice, quantidade);
  }, [quantidade]);

  const incrementar = () => {
    setQuantidade(quantidade + 1);
  };

  const decrementar = () => {
    setQuantidade(quantidade > 0 ? quantidade - 1 : 0);
  };

  const calcular = () => {
    return (quantidade * props.plataforma.precoPorUnidade).toFixed(2);
  };

  return (
    <>
      <div className="flex rounded-lg shadow-md bg-blue-300 md:w-full md:pr-8 transition-all duration-100 mease-in-out md:hover:scale-125">
        <span
          className={`text-sm text-gray-600 font-semibold p-2 
     mx-24 absolute`}
        >
          <i>{props.plataforma.nome}</i>
        </span>
        <div className="lg:p-2 p-5 flex items-start">
          <img src={props.plataforma.image} alt="wpp" />
          {/* <div className="absolute m-8 ml-28"> */}
          <div className="flex lg:flex-col justify-center items-center relative top-6">
            <div className="z-10 flex justify-around items-center h-full w-full lg:w-1/2 mt-2">
              <IconButton onClick={() => decrementar()}>
                <Remove className="text-black" />
              </IconButton>
              <div className="text-sm">{quantidade}</div>
              {/* <img src="mais.png" className="cursor-pointer w-1/3" onClick={ () => incrementar()}/> */}
              <IconButton onClick={() => incrementar()}>
                <Add className="text-black" />
              </IconButton>
              {/* </div> */}
            </div>
            <div className="text-lg flex relative top-1 left-5 lg:static lg:text-xs text-black font-semibold">
              <i className="mr-1">R$ </i>
              {calcular().split(".").join(",")}
            </div>
          </div>

          <hr className="border-b border-white " />
        </div>
      </div>
    </>
  );
}

function AtendenteCalculoPreco(props) {

  const [quantidade, setQuantidade] = React.useState(props.quantidade);

 
  useEffect(() => {
    props.atualizarQuantidadeAtendente(quantidade);
  }, [quantidade]);

  const aoDeslizarSlider = (event) => {
    const novoValor = (event.target.value);
    setQuantidade(novoValor);
  
  };

  const calcular = () => {
    let preco = 0;
    props.precosPorUnidade.forEach((precoPorUnidade) => {
      if (
        quantidade >= precoPorUnidade.min &&
        quantidade <= precoPorUnidade.max
      ) {
        preco = precoPorUnidade.preco * quantidade;
      }
    });
    
    return preco;
  };

  return (
    <div
      className="flex rounded-lg shadow-md bg-blue-300 transition-all 
      duration-100 ease-in-out md:hover:scale-125"
    >
      <span className="text-sm text-gray-600 font-semibold p-2 mx-24 absolute">
        <i>Atendentes</i>
      </span>
      <div className="p-5 lg:p-2 flex  items-start">
        <img src="atendentes3.png" alt="multidao" />
        <div className="z-10 flex justify-around items-center h-full w-full mt-2">
          <div className="flex flex-col items-center justify-center ml-10 md:ml-0 w-full h-full">
            <div className="text-base">{quantidade}</div>
            <RangeStepInput 
            min={1} max={100}
           onChange={aoDeslizarSlider}
            className='w-full my-2'
            />
            <div className="text-lg md:text-xs font-semibold">
              <i>R$ </i>
              {(calcular()).toFixed(2).split(".").join(",")}
              
            </div>
          </div>
        </div>
        <hr className="border-b border-white " />
      </div>
      
    </div>
  );
}

function PlanoCalculoValor(props) {
  const calcular = () => {
    let total = 0;
    let totalAtendentePreco = props.atendente.quantidade;
    props.plataformas.forEach((plataforma) => {
      total += +(plataforma.quantidade * plataforma.precoPorUnidade).toFixed(2);
    });

    total += +(totalAtendentePreco < 4 ? (totalAtendentePreco * 69.9).toFixed(2) : totalAtendentePreco < 16 ? (totalAtendentePreco * 59.9).toFixed(2) : totalAtendentePreco < 31 ? (totalAtendentePreco * 54.9).toFixed(2) : (totalAtendentePreco * 49.9).toFixed(2));
    console.log(props.atendente)

    return total.toFixed(2);
  };
  // MUDAR CARD VALOR TOTAL
  return (
    <div
      className={`bg-gray-500 elevation-20dp lg:w-1/2 h-full
         m-5 mb-0 md:mt-10 flex flex-col sm:ml-48 lg:ml-0
         items-center rounded-lg p-16 transition-all 
         duration-100 ease-in-out 
         md:hover:scale-125${props.className ? props.className : ""}`}
    >
      <div
        className="flex justify-center flex-col items-center
       h-full w-full text-lg text-white"
      >
        <div className="text-center">
          <div className="font-semibold  text-2xl">
            <i className="relative right-2">R$</i>1499,90
          </div>
          <div className="text-xs  italic">(parcela única)</div>
        </div>

        <div className="text-center text-white text-3xl">+</div>

        <div className="text-center text-white">
          <div className="font-semibold text-2xl">
            <i className="relative right-2">R$</i>
            {calcular().split(".").join(",")}
          </div>
          <div className="text-xs italic">(mensal)</div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(function CardPrice() {
  console.log('PAGE PRICE');
  const [plataformas, setPlataformas] = React.useState([
    {
      nome: "WhatsApp",
      quantidade: 1,
      precoPorUnidade: 49.9,
      image: "whatsapp.svg",
    },
    {
      nome: "Instagram",
      quantidade: 1,
      precoPorUnidade: 49.9,
      image: "instagram.svg",
    },
    {
      nome: "Messenger",
      quantidade: 1,
      precoPorUnidade: 49.9,
      image: "messenger.svg",
    },
    {
      nome: "Telegram",
      quantidade: 1,
      precoPorUnidade: 49.9,
      image: "telegram.svg",
    },
    {
      nome: "Robôs",
      quantidade: 1,
      precoPorUnidade: 49.9,
      image: "robo.png",
    },
  ]);

  const  atualizarQuantidadePlataforma = useCallback((indice, quantidade) => {
    const plataformasCopy = [...plataformas];
    plataformasCopy[indice].quantidade = quantidade;
    setPlataformas(plataformasCopy);
    console.log('UPDATE ANOTHERS');
  }, [plataformas]);

  const [atendente, setAtendente] = React.useState({
    precoAtual: 10 * 59.9,
    quantidade: 10,
    precosPorUnidade: [
      { min: 1, max: 3, preco: 69.9 },
      { min: 4, max: 15, preco: 59.9 },
      { min: 16, max: 30, preco: 54.9 },
      { min: 31, max: 100, preco: 49.9 },
    ],
  });

  const atualizarQuantidadeAtendente = useCallback((quantidade) => {
    const atendenteCopy = { ...atendente };
    atendenteCopy.quantidade = quantidade;
    setAtendente(atendenteCopy);
    console.log(atendenteCopy);
  }, [atendente]);

  // const atualizarPrecoAtualAtendente = useCallback((precoAtual) => {
  //   const atendenteCopy = { ...atendente };
  //   atendenteCopy.precoAtual = precoAtual;
  //   setAtendente(atendenteCopy);
  //   console.log(atendenteCopy);
  // }, [atendente]);



  return (
    <section className="py-20 mt-20" id="preco">
      {/* Heading */}
      <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 className="text-3xl font text-center text-black">
          Faça um resultado parcial
        </h1>
        <p className="text-center text-gray-500 mt-4 flex-col">
          Em uma única tela, você adciona a quantidade de <br />
          <b className="text-red-400">NÚMEROS</b>, seja{" "}
          <b className="text-green-logo">WhatsApp</b> ou
          <b className="text-blue-logo"> Telegram</b>,
          <b className="text-purple-300"> PERFIS</b>, <b>BOTs </b>e{" "}
          <b className="text-pink-800">ATENDENTES </b> .<br /> E já obtenha o
          preço parcial.
          <br />
        </p>
      </div>
      <div className="lg:flex">
        <div
          className=" lg:px-12 p-2 md:p-5 grid grid-cols-1 
        sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-screen-lg mt-16 "
        >
          {plataformas.map((plataforma, indice) => (
            <PlataformaCalculoPreco
              atualizarQuantidadePlataforma={atualizarQuantidadePlataforma}
              key={indice}
              indice={indice}
              plataforma={plataforma}
            />
          ))}
          <AtendenteCalculoPreco
            atualizarQuantidadeAtendente={atualizarQuantidadeAtendente}
            {...atendente}
          />
        </div>
        <div className="sm:w-3/4 lg:w-5/12 flex justify-center md:ml-6">
          <PlanoCalculoValor plataformas={plataformas} atendente={atendente} />
        </div>
      </div>
    </section>
  );
});
