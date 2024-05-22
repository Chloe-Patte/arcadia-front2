import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const FormComment = () => {
  const [pseudo, setPseudo] = useState("")
  const [message, setMessage] = useState("")
  const [response, setResponse] = useState("")
 
  const handleSubmit = () => {
    fetch("https://arcadia-back2.onrender.com/comment/", {
      method: "POST",
      body: JSON.stringify({
        pseudo,
        message
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(response => {
      if(response.status === 200){
        console.log(response)
        setResponse("Commentaire envoyé avec succès !")
      }else{
        setResponse(response.statusText)
      }
      setPseudo('')
      setMessage('')
    })
  }

  const handlePseudoChange = (event) => {
    setPseudo(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <section class="bg-white">
        <div class="py-4 lg:py-1 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-vertfonce">Laissez-nous votre avis</h2>
          <p class="mb-8 lg:mb-12 font-light text-center text-gray-500 sm:text-xl">Vous souhaitez partager votre expérience, nous serons ravis de lire votre commentaire</p>
            <div>
              <label for="prenom" class="block mb-2 text-sm text-left font-medium text-gray-900">Pseudo</label>
              <input type="text" name="pseudo" onChange={handlePseudoChange} value={pseudo} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="Votre pseudo" required/>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm text-left font-medium text-gray-900">
                Votre commentaire
              </label>
              <textarea type="text" name="message" onChange={handleMessageChange} value={message}  id="message" rows="6" required minlength="1" maxlength="150" 
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300" 
                placeholder="Écrivez votre commentaire ici. Maximum 150 caractères."/>
            </div>
            <Link to="/" class="text-gray-600">
              Annuler
            </Link>
            <button onClick={handleSubmit} type="submit" class="py-3 px-5 mt-4 ml-6 bg-jauneor text-sm font-medium text-center text-white rounded-lg sm:w-fit">
              Poster mon commentaire
            </button>
            <p>{response}</p>
        </div>
      </section>
    </div>
  )
}

export default FormComment