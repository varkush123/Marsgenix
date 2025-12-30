function protectPage() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const user = JSON.parse(localStorage.getItem("user"));
  
  if (!isLoggedIn || !user) {
    alert("Please login first!");
    window.location.href = "login.html"; 
    return null;
  }
  
  return user;
}

