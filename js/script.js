document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if(username === '' || password === '') {
        alert('Please fill in all fields');
    } else {
        alert('Form submitted successfully');
        // Add your login logic here
    }
});