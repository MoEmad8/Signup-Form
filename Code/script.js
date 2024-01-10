
function handleSignupForm(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (username && email && password) {
      const signupMessage = document.getElementById("signupMessage");
      signupMessage.style.color = "green";
      signupMessage.textContent = "Sign up successful!";

    } else {
      const signupMessage = document.getElementById("signupMessage");
      signupMessage.style.color = "red";
      signupMessage.textContent = "Please fill in all fields!";
    }
  }
  

  function handleLoginForm(event) {
    event.preventDefault();
    const loginemail = document.getElementById("loginemail").value;
    const loginPassword = document.getElementById("loginPassword").value;
  
    if (loginemail && loginPassword) {
      const loginMessage = document.getElementById("loginMessage");
      loginMessage.style.color = "green";
      loginMessage.textContent = "Login successful!";
       
      
    
      window.location.href = 'welcome.html';
      document.getElementById("name").innerHTML.value=loginemail;
    } else {
      const loginMessage = document.getElementById("loginMessage");
      loginMessage.style.color = "red";
      loginMessage.textContent = "Please fill in all fields!";
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");
  
    if (signupForm) {
      signupForm.addEventListener("submit", handleSignupForm);
    }
  
    if (loginForm) {
      loginForm.addEventListener("submit", handleLoginForm);
    }
  })
  
  
  document.getElementById('logout').addEventListener('click', function(e) {
    e.preventDefault();
  

    window.location.href = 'index.html'; 
  });
  
