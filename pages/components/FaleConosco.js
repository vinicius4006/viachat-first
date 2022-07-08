import { useEffect, useState } from "react";

export const FaleConosco = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [send, sendText] = useState('Enviar');
  const [disabled, setDisabled] = useState(false);




  const handleSubmit = (event) => {
    event.preventDefault()
    const namePerson = name
    const emailPerson = email
    const textPerson = text
    sendText('Enviado');
    setDisabled(true);
    console.log(
      "Nome: " + namePerson, 
      "Email: "+ emailPerson, 
     " Assunto: " + textPerson)
    
  }



  return (
    <form className="p-5 max-w-7xl mx-auto lg:my-12 py-12 lg:w-8/12
     bg-no-repeat sm:bg-cover sm:bg-center bg-center bg-auto" onSubmit={handleSubmit}>

     
      <h1 className="text-3xl text-center text-black my-5 font-bold">Fale Conosco</h1>
      <div className="max-w-3xl mx-auto">
        <label>
          <span className="span-contact">Nome</span>
          <input 
          name="personName"
          value={disabled ? '' : name}
          onChange={ e => setName(e.target.value)}
          type={"text"} required
          />
        </label>
        <label>
          <span className="span-contact">Email</span>
          <input 
          name="emailPerson"
          value={disabled ? '' : email}
          onChange={ e => setEmail(e.target.value)}
          type={"email"} required />
        </label>
        <label>
          <span className="span-contact">Assunto</span>
          <textarea 
          name="textPerson"
          value={disabled ? '' : text}
          onChange={ e => setText( e.target.value)}
          className="h-32"
          required />
        </label>

        <button 
        type="submit" 
        disabled={disabled}
       className={disabled ? `btn-send` : `btn btn-blue cursor-pointer block hover:bg-blue-500 border-0 w-1/2 m-auto`}
        > 
          {send}</button>

          
      
       
      </div>
    </form>
  );
};

{
  /* <div className="p-5 max-w-7xl mx-auto py-12 ">
      <form className="sm:w-3/4 lg:w-5/12 mx-auto px-2 flex flex-col items-center">
        <h1 className="text-3xl text-center text-black mb-5">Fale Conosco</h1>

        <label>
          <span>Nome</span>
          <input type="text" required="required" />
        </label>

        <label>
          <span>Email</span>

          <input type="email" required="required" />
        </label>

        <label>
          <span>Assunto</span>

          <textarea type="text" required="required" />
        </label>

        <button
          type="submit"
          onSubmit={enviarDados}
          className="btn btn-blue hover:bg-blue-500 w-1/2"
        >
          Enviar
        </button>
      </form>
    </div> */
}
