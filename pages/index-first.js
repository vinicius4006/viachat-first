import React, { useEffect } from 'react';
import {IconButton} from '@material-ui/core';
import {styled, alpha} from '@material-ui/core';
import {SliderUnstyled} from '@material-ui/core';
import {Add, Remove, Check, LocationOnOutlined, EmailOutlined} from '@material-ui/icons';

const StyledSlider = styled(SliderUnstyled)(
  ({ theme }) => `
  color: ${theme.palette.mode === 'light' ? '#1976d2' : '#90caf9'};
  height: 4px;
  width: 100%;
  padding: 13px 0;
  display: inline-block;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
  opacity: 0.75;
  &:hover {
    opacity: 1;
  }

  & .MuiSlider-rail {
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: currentColor;
    opacity: 0.38;
  }

  & .MuiSlider-track {
    display: block;
    position: absolute;
    height: 4px;
    border-radius: 2px;
    background-color: currentColor;
  }

  & .MuiSlider-thumb {
    position: absolute;
    width: 14px;
    height: 14px;
    margin-left: -6px;
    margin-top: -5px;
    box-sizing: border-box;
    border-radius: 50%;
    outline: 0;
    border: 2px solid currentColor;
    background-color: #fff;

    :hover,
    &.Mui-focusVisible {
      box-shadow: 0 0 0 0.25rem ${alpha(
        theme.palette.mode === 'light' ? '#1976d2' : '#90caf9',
        0.15,
      )};
    }

    &.Mui-active {
      box-shadow: 0 0 0 0.25rem ${alpha(
        theme.palette.mode === 'light' ? '#1976d2' : '#90caf9',
        0.3,
      )};
    }
  }
`,
);

function PlataformaCalculoPreco(props) {
  const [quantidade, setQuantidade] = React.useState(props.plataforma.quantidade);

  useEffect(() => {
    props.atualizarQuantidadePlataforma(props.indice, quantidade);
  }, [quantidade]);

  const incrementar = () => {
    setQuantidade(quantidade + 1);
  }

  const decrementar = () => {
    setQuantidade(quantidade > 0 ? quantidade - 1 : 0);
  }

  const calcular = () => {
    return (quantidade * props.plataforma.precoPorUnidade).toFixed(2);
  }

  return (
    <div className='elevation-20dp flex flex-col items-center p-5 relative'>
      <div className='z-10 flex flex-col items-center'>
        <img className='w-6/12' src={props.plataforma.image}/>
        <div className='text-center text-sm font-semibold mt-4 text-gray-500'>{props.plataforma.nome}</div>
      </div>

      <div className='z-10 flex flex justify-around items-center h-full w-full mt-2'>
        <IconButton onClick={() => decrementar()}>
          <Remove className='text-black' />
        </IconButton>
        <div className='text-black'>{quantidade}</div>
        <IconButton onClick={() => incrementar()}>
          <Add className='text-black' />
        </IconButton>
      </div>

      <div className='text-xl mt-3 text-black'>{calcular().split('.').join(',')}</div>
    </div>
  );
}

function AtendenteCalculoPreco(props) {
  const [quantidade, setQuantidade] = React.useState(props.quantidade);
  const [precoAtual, setPrecoAtual] = React.useState(props.precoAtual);
  
  useEffect(() => {
    props.atualizarQuantidadeAtendente(quantidade);
    props.atualizarPrecoAtualAtendente(precoAtual);
  }, [quantidade, precoAtual]);

  const aoDeslizarSlider = (event, novoValor) => {
    setQuantidade(novoValor);
    setPrecoAtual(calcular());
  }

  const calcular = () => {
    let preco = 0;
    props.precosPorUnidade.forEach((precoPorUnidade) => {
      if (quantidade >= precoPorUnidade.min && quantidade <= precoPorUnidade.max) {
        preco = precoPorUnidade.preco * quantidade;
      }
    });
    return preco;
  }

  return (
    <div className='elevation-20dp flex flex-col items-center rounded-lg p-5'>
      <div className='z-10 flex flex-col items-center'>
        <img className='w-6/12' src='clerk.png'/>
        <div className='text-center text-sm font-semibold mt-4 text-gray-500'>Quantidade de atendentes</div>
      </div>
      <div className='flex flex-col items-center w-full h-full justify-center mt-2'>
        <div className='text-3xl'>{quantidade}</div>
        <StyledSlider min={1} max={100} value={quantidade} onChange={aoDeslizarSlider} className='w-full' />
      </div>
      <div className='text-xl'>{precoAtual.toFixed(2).split('.').join(',')}</div>
    </div>
  );
}

function BotCalculoPreco(props) {
  const [quantidade, setQuantidade] = React.useState(props.quantidade);

  useEffect(() => {
    props.atualizarQuantidadeBot(quantidade);
  }, [quantidade]);

  const incrementar = () => {
    setQuantidade(quantidade + 1);
  }

  const decrementar = () => {
    setQuantidade(quantidade > 0 ? quantidade - 1 : 0);
  }

  const calcular = () => {
    return (props.precoPorUnidade * quantidade).toFixed(2);
  }

  return (
    <div className='elevation-20dp flex flex-col items-center p-5'>
      <div className='z-10 flex flex-col items-center'>
        <img className='w-6/12' src='robot.png'/>
        <div className='text-center text-sm font-semibold mt-4 text-gray-500'>Quantidade de bots</div>
      </div>
      <div className='flex items-center justify-around h-full w-full'>
        <IconButton onClick={() => decrementar()}>
          <Remove className='text-black' />
        </IconButton>
        <div>{quantidade}</div>
        <IconButton onClick={() => incrementar()}>
          <Add className='text-black' />
        </IconButton>
      </div>
      <div className='text-xl'>{calcular().split('.').join(',')}</div>
    </div>
  );
}

function PlanoCalculoValor(props) {
  const calcular = () => {
    let total = 0;
    
    props.plataformas.forEach((plataforma) => {
      total += +(plataforma.quantidade * plataforma.precoPorUnidade).toFixed(2);
    });

    total += +props.atendente.precoAtual.toFixed(2);

    total += +(props.bot.quantidade * props.bot.precoPorUnidade).toFixed(2);

    return total.toFixed(2);
  }

  return (
    <div className={`elevation-20dp flex flex-col items-center p-5 ${props.className ? props.className : ''}`}>
      <div className='flex justify-center flex-col items-center h-full w-full text-lg text-black'>
        <div className='text-center'>
          <div className='font-semibold text-2xl text-black opacity-80'>1499,90</div>
          <div className='text-xs italic'>(parcela única)</div>
        </div>

        <div className='text-center text-3xl'>+</div>

        <div className='text-center'>
          <div className='font-semibold text-2xl text-black opacity-80'>{calcular().split('.').join(',')}</div>
          <div className='text-xs italic'>(mensal)</div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [plataformas, setPlataformas] = React.useState([
    {nome: 'Quantidade de números', quantidade: 1, precoPorUnidade: 349.90, image: 'whatsapp2.png'},
    {nome: 'Quantidade de perfis', quantidade: 0, precoPorUnidade: 49.90, image: 'instagram2.png'},
    {nome: 'Quantidade de perfis', quantidade: 0, precoPorUnidade: 49.90, image: 'messenger2.png'},
    {nome: 'Quantidade de números', quantidade: 0, precoPorUnidade: 49.90, image: 'telegram2.png'},
  ]);

  const atualizarQuantidadePlataforma = (indice, quantidade) => {
    const plataformasCopy = [...plataformas];
    plataformasCopy[indice].quantidade = quantidade;
    setPlataformas(plataformasCopy);
  };

  const [atendente, setAtendente] = React.useState({
    precoAtual: 10 * 59.90,
    quantidade: 10,
    precosPorUnidade: [
      {min: 1, max: 3, preco: 69.90},
      {min: 4, max: 15, preco: 59.90},
      {min: 16, max: 30, preco: 54.90},
      {min: 31, max: 100, preco: 49.90},
    ]
  });

  const atualizarQuantidadeAtendente = (quantidade) => {
    const atendenteCopy = {...atendente};
    atendenteCopy.quantidade = quantidade;
    setAtendente(atendenteCopy);
  }

  const atualizarPrecoAtualAtendente = (precoAtual) => {
    const atendenteCopy = {...atendente};
    atendenteCopy.precoAtual = precoAtual;
    setAtendente(atendenteCopy);
  }

  const [bot, setBot] = React.useState({quantidade: 1, precoPorUnidade: 99.9});

  const atualizarQuantidadeBot = (quantidade) => {
    const botCopy = {...bot};
    botCopy.quantidade = quantidade;
    setBot(botCopy);
  }

  return (
    <div className='mt-6'>
      <div className='ml-20 mr-20'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center' style={{height: 50}}>
            <img className='h-full' src='logo.png' />
            {/* <div className='font-comfortaa font-semibold text-2xl ml-3'>ViaChat</div> */}
          </div>
          <div className='flex items-center'>
            <div className='text-sm opacity-80 font-comfortaa'>
              <a href='#preco'>Quanto custa?</a>
            </div>
            <div className='text-sm opacity-80 ml-5 font-comfortaa'>
              <a href='https://app.viachat.com.br/'>Entrar</a>
            </div>
            <div className='text-sm ml-5 font-comfortaa'>
              <button className='bg-gradient-to-r from-blue-logo via-transition-gb to-green-logo hover:bg-neutral-200 p-2 rounded'>Teste grátis</button>
            </div>
          </div>
        </div>
        <div className='flex items-center mt-10' style={{height: 400}}>
          <div className='w-5/12'>
            <div className='text-4xl font-comfortaa font-semibold opacity-80'>Toda sua equipe atendendo em um só lugar</div>
            <div className='font-comfortaa mt-4 font-thin'>Com o ViaChat você coloca quantos operadores quiser atendendo simultaneamente em vários canais de atendimento em um único lugar.</div>
            <div className='mt-5 w-full'>
              <button className='button'>Teste grátis agora mesmo dasdasd</button>
            </div>
          </div>
          <div className='w-7/12'>
            <img className='w-full' src='atendentes.jpg' />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-10 mt-20 mb-20 ml-20 mr-20'>
        <div className='flex flex-col items-center p-5 elevation-20dp'>
          <img className='w-3/12' src='vantagens1.png' />
          <div className='text-center font-semibold font-comfortaa mt-3'>Centralize a comunicação da sua empresa</div>
          <div className='text-sm mt-3 font-comfortaa'>Todo seu time atendendo em um único número WhatsApp simultaneamente,  com um chat interno em tempo real.</div>
        </div>
        <div className='flex flex-col items-center p-5 elevation-20dp'>
          <img className='w-3/12' src='vantagens2.png' />
          <div className='text-center font-semibold font-comfortaa mt-3'>Organize as conversas dos times por setores</div>
          <div className='text-sm mt-3 font-comfortaa'>Crie setores para segmentar seus leads no chat e organize os canais de atendimento da sua empresa.</div>
        </div>
        <div className='flex flex-col items-center p-5 elevation-20dp'>
          <img className='w-3/12' src='vantagens3.png' />
          <div className='text-center font-semibold font-comfortaa mt-3'>Atendimento automatizado e colaborativo</div>
          <div className='text-sm mt-3 font-comfortaa'>Agende o envio de mensagens para datas futuras. E se preciso, transfira a conversa para outro atendente com um clique.</div>
        </div>
        <div className='flex flex-col items-center p-5 elevation-20dp'>
          <img className='w-3/12' src='vantagens4.png' />
          <div className='text-center font-semibold font-comfortaa mt-3'>Adicione etiquetas e filtre suas conversas</div>
          <div className='text-sm mt-3 font-comfortaa'>Crie etiquetas personalizadas e associe a clientes. Então filtre as conversas e atribua ao membro certo da equipe</div>
        </div>
        <div className='flex flex-col items-center p-5 elevation-20dp'>
          <img className='w-3/12' src='vantagens5.png' />
          <div className='text-center font-semibold font-comfortaa mt-3'>Agilize seus primeiros segundos de interação</div>
          <div className='text-sm mt-3 font-comfortaa'>Crie um banco de mensagens rápidas e envie para seus clientes com apenas um comando. Não o deixe esperando! </div>
        </div>
        <div className='flex flex-col items-center p-5 elevation-20dp'>
          <img className='w-3/12' src='vantagens6.png' />
          <div className='text-center font-semibold font-comfortaa mt-3'>Gerenciamento de permissões e visualização</div>
          <div className='text-sm mt-3 font-comfortaa'>Crie um banco de mensagens rápidas e envie para seus clientes com apenas um comando. Não o deixe esperando!</div>
        </div>
      </div>
      <div className='flex items-center mb-20 ml-20 mr-20'>
        <div className='w-6/12'>
          <img className='w-full' src='mockuper3.png' />
        </div>
        <div className='w-6/12 pl-20'>
          <div className='font-comfortaa text-2xl font-semibold opacity-80'>Esteja sempre nos principais canais</div>
          <div className='font-comfortaa opacity-80 mt-3'>Em uma única tela, você responde às mensagens que recebe dos seus clientes e oferece a eles toda a comodidade de se comunicarem de onde, como e quando quiserem.</div>
        </div>
      </div>
      <div className='flex items-center pl-20 pr-20 pt-10 pb-10 bg-green-100'>
        <img className='absolute opacity-25 right-1/4' src='whatsapp2.png' />
        <div className='w-6/12 pl-20'>
          <div className='font-comfortaa text-2xl font-semibold opacity-80'>WhatsApp Business API Oficial</div>
          <div className='font-comfortaa opacity-80 mt-3'>Automatize o canal preferido de comunicação com a melhor plataforma de atendimento digital. A integração que atende seus clientes e a todos os seus pedidos.</div>
        </div>
        <div className='w-6/12 flex justify-center relative' style={{height: 500}}>
          <img className='h-full z-10' src='icon3.png' />
        </div>
      </div>
      <div id='preco' className='mt-20 ml-20 mr-20'>
        <div className='grid grid-cols-7 grid-rows-1 p-10 gap-4'>
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
            atualizarPrecoAtualAtendente={atualizarPrecoAtualAtendente}
          />
          <BotCalculoPreco
            atualizarQuantidadeBot={atualizarQuantidadeBot}
            {...bot}
          />
          <PlanoCalculoValor
            plataformas={plataformas}
            atendente={atendente}
            bot={bot}
          />
        </div>
      </div>
      <div className='mt-20 ml-20 mr-20'>
        <div className='grid grid-cols-12 gap-1'>
          <div className='flex justify-end'>
            <Check />
          </div>
          <div className='col-span-11 font-comfortaa text-xl opacity-80'>Por que tenho que sincronizar meu Whatsapp com o ViaChat?</div>
          <div></div>
          <div className='col-span-11 font-comfortaa text-sm'>Para que possamos enviar e receber mensagens usando seu telefone, precisamos vinculá-lo a um QR Code que  forneceremos quando você iniciar esse processo. Você pode revogar essa permissão a qualquer momento no WhatsApp do seu aparelho.</div>
        </div>

        <div className='grid grid-cols-12 gap-1 mt-5'>
          <div className='flex justify-end'>
            <Check />
          </div>
          <div className='col-span-11 font-comfortaa text-xl opacity-80'>É possível utilizar vários usuários?</div>
          <div></div>
          <div className='col-span-11 font-comfortaa text-sm'>Não é possível utilizar mais de um número por conta ao mesmo tempo. Você poderá deslogar o seu WhatsApp e iniciar uma nova sessão com um novo número na mesma conta.</div>
        </div>

        <div className='grid grid-cols-12 gap-1 mt-5'>
          <div className='flex justify-end'>
            <Check />
          </div>
          <div className='col-span-11 font-comfortaa text-xl opacity-80'>O que acontece se meu telefone ficar sem internet?</div>
          <div></div>
          <div className='col-span-11 font-comfortaa text-sm'>O serviço do uTalk só estará sincronizado se seu telefone estiver conectado a internet. Você é o responsável por manter seu telefone carregado, ligado e conectado à internet.</div>
        </div>

        <div className='grid grid-cols-12 gap-1 mt-5'>
          <div className='flex justify-end'>
            <Check />
          </div>
          <div className='col-span-11 font-comfortaa text-xl opacity-80'>O link de acesso ao WebChat é sempre o mesmo?</div>
          <div></div>
          <div className='col-span-11 font-comfortaa text-sm'>Sim! O link que seus operadores usarão para acessar o seu WhatsApp nunca mudará. Ele é gerado quando você efetua o seu cadastro na plataforma.</div>
        </div>
      </div>

      <div className='mt-20 grid grid-cols-4 pl-20 pr-20 pt-10 pb-20 bg-gray-200'>
        <div className='flex flex-col'>
          <div className='text-xl opacity-80 font-comfortaa'>Produto</div>
          <div className='text-sm mt-1 font-comfortaa'>Preço</div>
          <div className='text-sm mt-1 font-comfortaa'>Recursos</div>
          <div className='text-sm mt-1 font-comfortaa'>Central de Ajuda</div>
          <div className='text-sm mt-1 font-comfortaa'>Desenvolvedores</div>
        </div>

        <div className='flex flex-col'>
          <div className='text-xl opacity-80 font-comfortaa'>Legal</div>
          <div className='text-sm mt-1 font-comfortaa'>Termos de uso</div>
          <div className='text-sm mt-1 font-comfortaa'>Política de privacidade</div>
          <div className='text-sm mt-1 font-comfortaa'>Validador</div>
          <div className='text-sm mt-1 font-comfortaa'>Validador ITI</div>
        </div>

        <div className='flex flex-col'>
          <div className='text-xl opacity-80 font-comfortaa'>Sobre o ViaChat</div>
          <div className='text-sm mt-1 font-comfortaa'>Compania</div>
          <div className='text-sm mt-1 font-comfortaa'>Vídeos</div>
        </div>

        <div className='flex flex-col'>
          <div className='text-xl opacity-80 font-comfortaa'>Contato</div>
          <div className='text-sm mt-1 font-comfortaa grid grid-cols-12'>
            <LocationOnOutlined />
            <div className='col-span-11'>Rua Odinéia Martins Viana, 30</div>
          </div>
          <div className='text-sm mt-1 font-comfortaa grid grid-cols-12'>
            <div></div>
            <div className='col-span-11'>Conjunto Planalto II</div>
          </div>
          <div className='text-sm mt-1 font-comfortaa grid grid-cols-12'>
            <div></div>
            <div className='col-span-11'>Imperatriz - MA</div>
          </div>
          <div className='text-sm mt-1 font-comfortaa grid grid-cols-12'>
            <EmailOutlined />
            <div className='col-span-11'>contato@viachat.com.br</div>
          </div>
        </div>
      </div>

      <div className='font-comfortaa text-sm opacity-80 text-center bg-gray-200 pb-2'>©2021 ViaChat. All rights reserved.</div>
    </div>
  );
}
