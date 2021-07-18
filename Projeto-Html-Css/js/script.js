const fields = document.querySelectorAll("[required]") 


function ValidaField(field)  {
	//Logica verifica se tem erros
	function  verifyErrors() {
		let foundError = false;
	
     
     for(let error in field.validity) {
     		// se nao for customErorr
     		//entao verifica se tem erro
     		if( field.validity[error] && !field.validity.valid) {

     			foundError = error
     		}
     }
     return foundError;

  }

  function customMessage(typeError) {
  	const messages = {
  		text: {
  			valueMissing: "Por favor,preencha este campo"
  		},
  		email: {
  			valueMissing: "Email e Obrigatorio",
  			typeMismatch: "Por Favor,preencha um email valdio"
  		}
  	}
  	return messages[field.type] [typeError] /* pega o type emai l e text */

  }

  function setCustomMessage(message) {
    const spanError = fiel.parent.querySelectorA("span error")
    if(message) {
    spanError.classList.add("active")
	spanError.innverHTML = message
  }else {
   spanError.classList.remove("active")
	spanError.innverHTML=""
  }

}

return function() {

	const error = verifyErrors()

  if(verifyErrors()) {
  	const message = customMessage(error)

  	field.style.borderColor = "red"
  	setCustomMessage(message)
  }else {
  	field.style.borderColor = "green"
     	setCustomMessage()
     }
  }



function customValidation(event) {
	const.field = event.target
	const validation = ValidaField(field)

  validation()

}



for(  field of fields) {
	field.addEventListener("invalid",event => {
	// elimirnar o bubble
   event.preventDefault()
   customValidation(event)
	
})

field.addEventListener("blur",customValidation)




/* Procurar o docuemnto form */
document.querySelextor("form")
.addEventListener("submit",event =>{

 console.log("enviar o formulario")

 // nao vai enviar o formulario 
 event.preventDefault()
})

