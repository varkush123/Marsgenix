function selectRole(role) {
  localStorage.setItem("role", role);
  alert("Role selected: " + role);
  window.location.href = "signup.html";
}


function signup() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;
  
  if (!name || !email || !password || !confirm) {
    alert("All fields are required");
    return;
  }
  
  if (password !== confirm) {
    alert("Password does not match");
    return;
  }
  
  const role = localStorage.getItem("role");
  
  const user = {
    name,
    email,
    role,
    password 
  };
  
  localStorage.setItem("user", JSON.stringify(user));
  alert("Signup successful!");
  window.location.href = "login.html";
}



function login() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;
  
  const user = JSON.parse(localStorage.getItem("user"));
  
  if (!user) {
    alert("No user found. Please signup first.");
    return;
  }
  
  if (email !== user.email) {
    alert("Invalid email");
    return;
  }
  
  if (password !== user.password) {
    alert("Incorrect password");
    return;
  }
  
  localStorage.setItem("isLoggedIn", "true");
  alert("Login successful!");
  
  
  if (user.role === "customer") {
    window.location.href = "customer-dashboard.html";
  } else if (user.role === "helper") {
    window.location.href = "helper-dashboard.html";
  } else if (user.role === "admin") {
    window.location.href = "admin-dashboard.html";
  }
}


function logout() {
  localStorage.removeItem("isLoggedIn");
  alert("Logged out!");
  window.location.href = "login.html";
}


function togglePassword(inputId, icon) {
  const input = document.getElementById(inputId);
  
  if (input.type === "password") {
    input.type = "text";
    icon.textContent = "🙈"; // eye-off
  } else {
    input.type = "password";
    icon.textContent = "👁️"; // eye
  }
}


function protectPage() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    alert("Please login first!");
    window.location.href = "login.html";
  }
}