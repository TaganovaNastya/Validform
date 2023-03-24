const modal = document.getElementById('Modal')
const btn = document.getElementById("reg")
const span = document.getElementsByClassName("close")[0]
const form= document.getElementById('form');
const email = document.getElementById('formEmail');
const password = document.getElementById('password');

const btnpass = document.getElementById('btn_password')


form.addEventListener("submit", (event) => {
      
      validateEmail();
      validatePassword();

      const formData =new FormData(form);
      const emaildata= formData.get("email");
      const passdata= formData.get("password");
      console.table({emaildata, passdata});
      
      event.preventDefault();
      
  });

  const setError = (element, message) => {
    const inputControl = element.parentElement;
    const ErrorDisplay = inputControl.querySelector('.error');

    ErrorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
  }

  const setSuccess = element =>{
    const inputControl = element.parentElement;
    const ErrorDisplay = inputControl.querySelector('.error');

    ErrorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
    modal.style.display = "none"
  }


  const isValidEmail = email =>{
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
  }
  
  
  const validateEmail = () =>{
    const emailValue = email.value.trim();
    if(emailValue === ''){
      setError(email, 'Email не ведён');
      email.setCustomValidity("Введите Email")
    }else if(!isValidEmail(emailValue)){
      setError(email, 'Неправильно введён Email')
      email.setCustomValidity("Такого не существует Email")
    }else{
      setSuccess(email);
      email.setCustomValidity("")
    }

  }

  const validatePassword = () =>{
const passwordValue = password.value.trim();
    if(passwordValue === '') {
      setError(password, 'Пароль не введён');
      password.setCustomValidity("Введите пароль")
  } else if (passwordValue.length < 6 ) {
      setError(password, 'Пароль должен быть длинее 6 символов')
      password.setCustomValidity("Пароль должен быть длинее")
  } else {
      setSuccess(password);
      password.setCustomValidity("")
  }
  }

  email.addEventListener("blur", (event) =>{
    validateEmail();
  })
  password.addEventListener("blur", (event) =>{
    validatePassword();
  })

// btnpass.addEventListener("pointerdown", (event)=>{
//   if(password.getAttribute('type') === 'password'){
//     password.setAttribute('type', 'text')
//   }//else {
    
//   // }
// })

function show(event) {
  password.setAttribute("type", "text");
}

function setpass(event){
  password.setAttribute("type", "password")
}

btnpass.addEventListener("pointerdown", show)
btnpass.addEventListener("pointerup", setpass)

btn.onclick = function(){
    modal.style.display = "block";
}

span.onclick =  function(){
    modal.style.display = "none";
}
window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none"
    }
}



