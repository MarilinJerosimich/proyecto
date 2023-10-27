function ingresoEmail() {
    alert("Muchas gracias por suscribirse!!");
  }
  
  function comentarios() {
    alert(
      "Muchas gracias por su comentario y de ser necesario nos comunicaremos a la brevedad"
    );
  }
  
  function ingresoDeDatos() {
    let email = prompt("Ingresa tu email");
    if (email != "") {
      let contrasenia = prompt("Ingresa tu contraseña");
    } else {
      email = prompt("Ingresa tu email");
    }
  
    console.log(email);
    console.log(contrasenia);
  }

  //se cargan preguntas desde el archivo json

  fetch('questions.json')
    .then(response => response.json())
    .then(data => {
        const qaContainer = document.getElementById('qa-container');
        data.questions.forEach(qa => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'qa';
            questionDiv.textContent = qa.preguntas;

            const answerDiv = document.createElement('div');
            answerDiv.className = 'answer';
            answerDiv.textContent = qa.answer;

            questionDiv.addEventListener('click', () => {
                answerDiv.style.display = (answerDiv.style.display === 'none' || answerDiv.style.display === '') ? 'block' : 'none';
            });

            qaContainer.appendChild(questionDiv);
            qaContainer.appendChild(answerDiv);
        });
    });
