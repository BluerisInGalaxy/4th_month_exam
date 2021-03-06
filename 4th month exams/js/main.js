


var formEl = document.querySelector(".login-form")
var loginEl = document.querySelector(".login-input")
var passwordEl = document.querySelector(".password-input")

formEl.addEventListener('submit', async event => {
    event.preventDefault()

    const credentials = {
        email: loginEl.value,
        password: passwordEl.value
    }
    const result = await loginRequest(credentials)
    localStorage.setItem('token', result['Authorization'])
    window.location.href = "/admin.html"
    console.log(result)
})