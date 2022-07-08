import AnchorLink from 'react-anchor-link-smooth-scroll';
import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title: "Por que tenho que sincronizar meu Whatsapp com o ViaChat?",
      content:
        "Para que possamos enviar e receber mensagens usando seu telefone, precisamos vinculá-lo a um QR Code que forneceremos quando você iniciar esse processo. Você pode revogar essa permissão a qualquer momento no WhatsApp do seu aparelho.",
    },
    {
      title: "É possível utilizar vários usuários?",
      content:
        "Não é possível utilizar mais de um número por conta ao mesmo tempo. Você poderá deslogar o seu WhatsApp e iniciar uma nova sessão com um novo número na mesma conta.",
    },
    {
      title: "O que acontece se meu telefone ficar sem internet?",
      content:
        "O serviço ViaChat só estará sincronizado se seu telefone estiver conectado a internet. Você é o responsável por manter seu telefone carregado, ligado e conectado à internet.",
    },
    {
      title: "O link de acesso ao WebChat é sempre o mesmo?",
      content:
        "Sim! O link que seus operadores usarão para acessar o seu WhatsApp nunca mudará. Ele é gerado quando você efetua o seu cadastro na plataforma.",
    },
  ],
};

export default function Duvidas() {
  return (
    // FAQ
    <section className="bg-gray-200 py-20" id='faq'>
      <div className="container">
        {/* Heading */}
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 className="text-3xl text-center text-black">
            Perguntas Frequentes
          </h1>
          <p className="text-center text-gray-500 mt-4">
            Confira se sua dúvida se encontra por aqui
          </p>
        </div>
        {/* FAQ Items */}
        <div className="flex flex-col mt-12">
          <Faq data={data} styles={{
            rowContentColor: 'grey',
            bgColor:'D3D3D3',
            rowContentPaddingTop: '5px',
            rowContentPaddingBottom: '5px',
            rowContentPaddingLeft: '10px',
            rowContentPaddingRight: '10px',
          }}/>

          <AnchorLink href="#inicio" className="flex self-center mt-12 btn btn-blue hover:bg-blue-500">Voltar para o Topo</AnchorLink>
        </div>
        
      </div>
    </section>
  );
}
