import React, { useEffect } from 'react';
import {IconButton} from '@material-ui/core';
import {styled, alpha} from '@material-ui/core';
import {SliderUnstyled} from '@material-ui/core';
import {ExpandMore, ExpandLess, Add, Remove} from '@material-ui/icons';

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
    <div className='border-gradient flex flex-col items-center p-5 relative'>
      <div className='z-10 flex flex-col items-center'>
        <img className='w-4/12' src={props.plataforma.image}/>
        <div className='text-center text-sm font-semibold mt-2 text-gray-500'>{props.plataforma.nome}</div>
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

      <div className='text-xl mt-3 text-black'>R$ {calcular().split('.').join(',')}</div>
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
    <div className='border-gradient flex flex-col items-center rounded-lg p-5'>
      <div className='z-10 flex flex-col items-center'>
        <img className='w-4/12' src='clerk.png'/>
        <div className='text-center text-sm font-semibold mt-2 text-gray-500'>Quantidade de atendentes</div>
      </div>
      <div className='flex flex-col items-center w-full h-full justify-center mt-2'>
        <div className='text-3xl'>{quantidade}</div>
        <StyledSlider min={1} max={100} value={quantidade} onChange={aoDeslizarSlider} className='w-full' />
      </div>
      <div className='text-xl'>R$ {precoAtual.toFixed(2).split('.').join(',')}</div>
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
    <div className='border-gradient flex flex-col items-center p-5'>
      <div className='z-10 flex flex-col items-center'>
        <img className='w-4/12' src='robot.png'/>
        <div className='text-center text-sm font-semibold mt-2 text-gray-500'>Quantidade de bots</div>
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
      <div className='text-xl'>R$ {calcular().split('.').join(',')}</div>
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
    <div className={`background-gradient flex flex-col items-center p-5 ${props.className ? props.className : ''}`} style={{borderRadius: '30px'}}>
      <div className='flex justify-center flex-col items-center h-full w-full text-2xl text-white'>
        <div className='text-center'>
          <div className='font-semibold text-white' style={{textShadow: '1px 1px 2px black'}}>R$ 1499,90</div>
          <div className='text-sm italic' style={{textShadow: '1px 1px 2px black'}}>(parcela única)</div>
        </div>

        <div className='text-center text-3xl' style={{textShadow: '1px 1px 2px black'}}>+</div>

        <div className='text-center'>
          <div className='font-semibold text-white' style={{textShadow: '1px 1px 2px black'}}>R$ {calcular().split('.').join(',')}</div>
          <div className='text-sm italic' style={{textShadow: '1px 1px 2px black'}}>(mensal)</div>
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
    <div className='overflow-x-hidden overflow-y-hidden'>
      <div className='bg-cover' style={{backgroundImage: "url('background-inicio.png')", height: '120vh'}}>
        <div className='flex pl-20 pt-4 pb-4 relative' style={{backgroundColor: "rgba(20, 20, 20, 0.3)"}}>
          <div className='flex items-center'>
            <img src="/logo.png" className='w-12'/>
            <span className='ml-2 text-white'>ViaChat</span>
          </div>
          <div className='flex items-center w-10/12 justify-end'>
            <span className='font-semibold text-white'>Quanto custa?</span>
            <span className='ml-5 font-semibold text-white'>Entrar</span>
            <button className='ml-5 font-semibold gradient-button sign-up__button'>Teste grátis</button>
          </div>
        </div>
        <div className='w-full flex flex-col mt-24'>
          <div className='pl-20 w-6/12'>
            <div className='text-5xl text-white'>Toda sua equipe atendendo em um só lugar</div>
            <div className='mt-5 text-white'>Com o ViaChat você coloca quantos operadores quiser atendendo simultaneamente em vários canais de atendimento em um único lugar.</div>
            <button className='gradient-button learn-more__button mt-5'>Teste grátis agora mesmo</button>
          </div>
          <div className='pt-20 w-6/12 bg-cover bg-top'>
            {/* <img className='z-0 absolute w-7/12 -top-24 -right-40' src='/background1.png'/> */}
            {/* <img className='z-50 absolute w-4/12 top-20 right-20' src='/celular.png'/> */}
          </div>
        </div>
      </div>

      {/* <svg style={{position: 'absolute', top: 400}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}

      {/* <div className='flex justify-center'>
        <div className='text-center font-black text-4xl w-7/12'>Ganhe agilidade ao atender clientes e aumente suas vendas com o ViaChat</div>
      </div>

      <div className='grid grid-cols-3 gap-5 ml-20 mr-20 mt-10'>
        <div className=' p-5 rounded-3xl border-gradient'>
          <img className='w-2/12' src='/vantagens1.png'/>
          <div className='font-bold mt-2'>Centralize a comunicação da sua empresa</div>
          <div>Todo seu time atendendo em um único número Whatsapp simultaneamente, com um chat interno em tempo real.</div>
        </div>
        <div className=' p-5 rounded-3xl border-gradient'>
          <img className='w-2/12' src='/vantagens2.png'/>
          <div className='font-bold mt-2'>Organize as conversas dos tipos por setores</div>
          <div>Crie setores para segmentar seus leads no chat e organize os canais de atendimento da sua empresa.</div>
        </div>
        <div className=' p-5 rounded-3xl border-gradient'>
          <img className='w-2/12' src='/vantagens3.png'/>
          <div className='font-bold mt-2'>Atendimento automatizado e colaborativo</div>
          <div>Agende o envio de mensagens para datas futuras. E, se preciso, transfira a conversa para outro atendente com um clique.</div>
        </div>
        <div className=' p-5 rounded-3xl border-gradient'>
          <img className='w-2/12' src='/vantagens4.png'/>
          <div className='font-bold mt-2'>Adicione etiquetas e filtre suas conversas</div>
          <div>Crie etiquetas personalizadas e associe a clientes. Então filtre as conversas e atribua ao membro certo da equipe.</div>
        </div>
        <div className=' p-5 rounded-3xl border-gradient'>
          <img className='w-2/12' src='/vantagens5.png'/>
          <div className='font-bold mt-2'>Agilize seus primeiros segundos de interação</div>
          <div>Crie um banco de mensagens rápidas e envie para seus clientes com apenas um comando. Não o deixe esperando!</div>
        </div>
        <div className=' p-5 rounded-3xl border-gradient'>
          <img className='w-2/12' src='/vantagens6.png'/>
          <div className='font-bold mt-2'>Gerenciamento de permissões e visualização</div>
          <div>Com o ViaChat é possível privar as conversas! Além de ter permissões extras de gestor, como visualizar todos atendimentos.</div>
        </div>
      </div>

      <div className='flex justify-center mt-20'>
        <div className='text-center font-black text-4xl w-7/12'>Lorem Ipsum dolor sit amet onsectetur adipiscing elit. Proin molestie</div>
      </div>

      <div className='w-full relative' style={{height: '580px'}}>
        <div>
          <img className='w-9/12 absolute -top-64 -left-72' src='/background2.png' />
          <img className='w-5/12 absolute left-5 top-32' src='/icon2.png' />
        </div>    
        <div className='absolute w-5/12 right-0 top-52'>
          <div className='text-3xl font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          <div>Suspendisse sollicitudin, ligula vitae egestas scelerisque, felis eros lacinia augue, quis tincidunt elit nisi in neque. Aenean pharetra turpis in fermentum ullamcorper.</div>
        </div>    
      </div>

      <div className='w-full relative' style={{height: '580px'}}>
        <div className='absolute w-5/12 top-40 left-20'>
          <div className='text-3xl font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          <div>Suspendisse sollicitudin, ligula vitae egestas scelerisque, felis eros lacinia augue, quis tincidunt elit nisi in neque. Aenean pharetra turpis in fermentum ullamcorper.</div>
        </div> 
        <div>
          <img className='w-7/12 absolute -right-40 -top-40' src='/background3.png' />
          <img className='w-2/12 absolute right-40 top-10' src='/icon3.png' />
        </div> 
      </div>

      <div className='mt-28 pt-4'>
        <div className='text-4xl font-bold text-center'>Monte seu plano</div>

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

      <div className='mt-20 pt-4'>
        <div className='flex flex-col items-center'>
          <div className='text-4xl font-bold text-center'>Dúvidas frequentes</div>
          <div className='text-lg font-bold text-center text-gray-500'>Se tiver alguma dúvida sobre nossa plataforma, sugestões ou críticas...</div>
          <button className='font-semibold gradient-button fale-conosco__button mt-3'>Fale conosco no Whatsapp</button>
          <div className='text-gradient mt-3'>+55 (xx) x xxxx-xxxx</div>
        </div>

        <div className='pl-20 pr-20 mt-10'>
          <div className='grid grid-cols-12'>
            <div className='w-full flex justify-end pr-3'>
              <img style={{float: 'right', width: '30px'}} src='icon4.png' />
            </div>
            <div className='col-span-11 text-xl font-bold'>Por que tenho que sincronizar meu Whatsapp com o ViaChat?</div>
            <div></div>
            <div className='text-gray-600 col-span-11'>Para que possamos enviar e receber mensagens usando seu telefone, precisamos vinculá-lo a um QR Code que forneceremos quando você iniciar esse processo. Você pode revogar essa permissão a qualquer momento no Whatsapp do seu aparelho.</div>
          </div>
          
          <div className='grid grid-cols-12 mt-5'>
            <div className='w-full flex justify-end pr-3'>
              <img style={{float: 'right', width: '30px'}} src='icon4.png' />
            </div>
            <div className='col-span-11 text-xl font-bold'>É possível utilizar vários usuários?</div>
            <div></div>
            <div className='text-gray-600 col-span-11'>Não é possível utilizar mais de um número por conta ao mesmo tempo. Você poderá deslogar o seu Whatsapp e iniciar uma nova sessão com um novo número na mesma conta.</div>
          </div>

          <div className='grid grid-cols-12 mt-5'>
            <div className='w-full flex justify-end pr-3'>
              <img style={{float: 'right', width: '30px'}} src='icon4.png' />
            </div>
            <div className='col-span-11 text-xl font-bold'>O que acontece se meu telefone ficar sem internet?</div>
            <div></div>
            <div className='text-gray-600 col-span-11'>O serviço do uTalk só estará sincronizado se seu telefone estiver conectado a internet. Você é o responsável por manter seu telefone carregado, ligado e conectado à internet.</div>
          </div>

          <div className='grid grid-cols-12 mt-5'>
            <div className='w-full flex justify-end pr-3'>
              <img style={{float: 'right', width: '30px'}} src='icon4.png' />
            </div>
            <div className='col-span-11 text-xl font-bold'>O link de acesso ao WebChat é sempre o mesmo?</div>
            <div></div>
            <div className='text-gray-600 col-span-11'>Sim! O link que seus operadores usarão para acessar o seu Whatsapp nunca mudará. Ele é gerado quando você efetua o seu cadastro na plataforma.</div>
          </div>
        </div>
      </div>

      <div className='bg-gray-200 mt-32 grid grid-cols-4 pl-32 pt-10 pb-5'>
        <div>
          <div className='text-xl font-semibold'>Produto</div>
          <div className='text-lg text-gray-600'>Produto</div>
          <div className='text-lg text-gray-600'>Recursos</div>
          <div className='text-lg text-gray-600'>Central de Ajuda</div>
          <div className='text-lg text-gray-600'>Desenvolvedores</div>
        </div>
        <div>
          <div className='text-xl font-semibold'>Legal</div>
          <div className='text-lg text-gray-600'>Termos de uso</div>
          <div className='text-lg text-gray-600'>Política de privacidade</div>
          <div className='text-lg text-gray-600'>Validador</div>
          <div className='text-lg text-gray-600'>Validador ITI</div>
        </div>
        <div>
          <div className='text-xl font-semibold'>Sobre o ViaChat</div>
          <div className='text-lg text-gray-600'>Companhia</div>
          <div className='text-lg text-gray-600'>Vídeo</div>
        </div>
        <div>
          <div className='text-xl font-semibold'>Contato</div>
          <div className='text-lg text-gray-600'>Rua Odinéia Martins</div>
          <div className='text-lg text-gray-600'>Conjunto Planalto II</div>
          <div className='text-lg text-gray-600'>Imperatriz - MA</div>
          <div className='text-lg text-gray-600'>contato@viachat.com.br</div>
        </div>
        <div className='text-lg text-gray-600 mt-20'>@2021 ViaChat. All rights reserved.</div>
      </div> */}
    </div>
  );
}
