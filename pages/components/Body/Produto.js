
// import ImageGallery from 'react-image-gallery';


// const images_nov1 = [
//   {
//     original: 'centralizar.svg',
//     thumbnail: 'centralizar.svg',
//   },

// ];

// const images_nov2 = [
//   {
//     original: 'organizar.svg',
//     thumbnail: 'organizar.svg',
//   },
  
// ];
// const images_nov3 = [
//   {
//     original: 'robo-auto.svg',
//     thumbnail: 'robo-auto.svg',
//   },
 
// ];
// const images_nov4 = [
//   {
//     original: 'etiqueta.svg',
//     thumbnail: 'etiqueta.svg',
//   },
 
// ];
// const images_nov5 = [
//   {
//     original: 'agilizar.svg',
//     thumbnail: 'agilizar.svg',
//   },
  
// ];
// const images_nov6 = [
//   {
//     original: 'gerenciamento.svg',
//     thumbnail: 'gerenciamento.svg',
//   },
 
// ];



export default function Novidades() {
  return (
    <>
      <section className="bg-gray-200 py-20 mt-20 lg:mt-60" id='produto'>
        {/* Heading */}
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 className="text-3xl text-center text-black">
            Esteja sempre nos principais canais
          </h1>
          <p className="text-center text-gray-500 mt-4">
            Em uma única tela, você responde às mensagens que recebe dos seus
            clientes e oferece a eles toda a comodidade de se comunicarem de
            onde, como e quando quiserem.
          </p>
        </div>
        {/* Novidade #1 */}
        <div className="relative mt-20 lg:mt-24 ">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            {/* Image */}
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
             
            <img src='centralizar.svg' alt='team'/>
            {/* <ImageGallery items={images_nov1} /> */}
            </div>
            {/* Content */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-black text-center">
                Centralize a comunicação da sua empresa
              </h1>
              <p className="text-gray600 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Em uma única tela, você responde ás mensagens que recebe dos seus clientes e oferece a eles
                toda a
               
              </p>
            </div>
          </div>
          {/* Rounded Rectangle */}
          <div
            className="hidden lg:block overflow-hidden 
          bg-secretary-color rounded-r-full absolute h-80 w-2/4 -bottom-24 -left-36"
          ></div>
        </div>
        {/* Novidade #2 */}
        <div className="relative mt-20 lg:mt-52 ">
          <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
            {/* Image */}
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
              <img src='organizar.svg' alt='organization'/>
            {/* <ImageGallery items={images_nov2} /> */}
            </div>
            {/* Content */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-black text-center">
                Organize as conversas dos times por setores
              </h1>
              <p className="text-gray600 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Crie setores para segmentar seus leads no chat e organize os
                canais de atendimento da sua empresa.
                
              </p>
            </div>
          </div>
          {/* Rounded Rectangle */}
          <div
            className="hidden lg:block overflow-hidden 
            bg-gray-600 rounded-l-full absolute h-80 w-2/4 -bottom-24 -right-36"
          ></div>
        </div>
        {/* Novidade #3 */}
        <div className="relative mt-20 lg:mt-52 ">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            {/* Image */}
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img src='robo-auto.svg' alt='robo'/>
            {/* <ImageGallery items={images_nov3} /> */}
            </div>
            {/* Content */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-black text-center">
                Atendimento automatizado e colaborativo
              </h1>
              <p className="text-gray600 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Agende o envio de mensagens para datas futuras. E se preciso,
                transfira a conversa para outro atendente com um clique.
                
              </p>
            </div>
          </div>
          {/* Rounded Rectangle */}
          <div
            className="hidden lg:block overflow-hidden 
            bg-secretary-color rounded-r-full absolute h-80 w-2/4 -bottom-24 -left-36"
          ></div>
        </div>
        {/* Novidade #4 */}
        <div className="relative mt-20 lg:mt-52 ">
          <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
            {/* Image */}
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img src='etiqueta.svg' alt='label'/>
            {/* <ImageGallery items={images_nov4} /> */}
            </div>
            {/* Content */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-black text-center">
                Adicione etiquetas e filtre suas conversas
              </h1>
              <p className="text-gray600 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Crie etiquetas personalizadas e associe a clientes. Então filtre
                as conversas e atribua ao membro certo da equipe.
                
              </p>
            </div>
          </div>
          {/* Rounded Rectangle */}
          <div
            className="hidden lg:block overflow-hidden 
          bg-gray-600 rounded-l-full absolute h-80 w-2/4 -bottom-24 -right-36"
          ></div>
        </div>
        {/* Novidade #5 */}
        <div className="relative mt-20 lg:mt-52 ">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            {/* Image */}
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img src='agilizar.svg' alt='agilizar'/>
            {/* <ImageGallery items={images_nov5} /> */}
            </div>
            {/* Content */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-black text-center">
                Agilize seus primeiros segundos de interação
              </h1>
              <p className="text-gray600 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Crie um banco de mensagens rápidas e envie para seus clientes
                com apenas um comando. Não o deixe esperando!
                
              </p>
            </div>
          </div>
          {/* Rounded Rectangle */}
          <div
            className="hidden lg:block overflow-hidden 
          bg-secretary-color rounded-r-full absolute h-80 w-2/4 -bottom-24 -left-36"
          ></div>
        </div>
        {/* Novidade #6 */}
        <div className="relative mt-20 lg:mt-52 ">
          <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
            {/* Image */}
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img src='gerenciamento.svg' alt='gerenciamento'/>
            {/* <ImageGallery items={images_nov6} /> */}
            </div>
            {/* Content */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-black text-center">
                Gerenciamento de permissões e visualização
              </h1>
              <p className="text-gray600 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Crie um banco de mensagens rápidas e envie para seus clientes
                com apenas um comando. Não o deixe esperando!
                
              </p>
            </div>
          </div>
          {/* Rounded Rectangle */}
          <div
            className="hidden lg:block overflow-hidden 
            bg-gray-600 rounded-l-full absolute h-80 w-2/4 -bottom-24 -right-36"
          ></div>
        </div>

      </section>
    </>
  );
}
