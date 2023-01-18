const password = document.getElementById('password')
const passwordCheck = document.getElementById('password_confirm')
const form = document.getElementById('user_id')

form.addEventListener('submit', (e) => {
    let messages = []
    if (password.value != passwordCheck.value) {
        e.preventDefault()
        document.getElementById('error_msg').innerHTML = "Passwords must match."
    }
})