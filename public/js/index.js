const input = document.querySelector(".early-access__form input")
const submit = document.querySelector(".early-access__form button")

const error = document.querySelector(".early-access__error")
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9#$^&*{}?-]+(\.[a-zA-Z0-9#$^&*{}?-]+)*@[a-zA-Z0-9#$^&*{}?-]+(\.[a-zA-Z0-9#$^&*{}?-]+)*\.[a-z]+$/;
  return regex.test(email)
}

submit.addEventListener('click', (event) => {
  event.preventDefault()

  const email = input.value;

  if (validateEmail(email)) {
    error.style.display = "none"
  }else {
    error.style.display = "block"
  }
})
