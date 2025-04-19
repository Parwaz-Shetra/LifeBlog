// Sign Up Logic
document.getElementById('signupForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
  
    if (localStorage.getItem(email)) {
      document.getElementById('signupMessage').innerText = 'User already exists.';
    } else {
      localStorage.setItem(email, JSON.stringify({ name, email, password }));
      document.getElementById('signupMessage').innerText = 'Sign up successful! You can now login.';
      setTimeout(() => {
        window.location.href = 'login.html'; // Redirect to login page after sign up
      }, 1500);
      this.reset();
    }
  });
  
  // Login Logic
  document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    const userData = JSON.parse(localStorage.getItem(email));
  
    if (!userData || userData.password !== password) {
      document.getElementById('loginMessage').innerText = 'Invalid email or password.';
    } else {
      document.getElementById('loginMessage').innerText = `Welcome back, ${userData.name}! Redirecting...`;
      setTimeout(() => {
        window.location.href = 'index.html'; // Redirect to homepage after successful login
      }, 1500);
    }
  });
    