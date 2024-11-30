let users = [
  {
    email: "ilyas@gmail.com",
    password: "123456",
    fullName: "Ilyas Zhuanyshev",
    country: "Kazakhstan",
    birthdate: "1989-05-26",
  },
];

function render(template) {
  document.getElementById("content").innerHTML = template;
}

function showRegister() {
  const template = `
        <form onsubmit="register(event)">
            <h2>Register</h2>
            <input type="email" id="regEmail" placeholder="Email" required><br>
            <input type="password" id="regPassword" placeholder="Password" required><br>
            <input type="text" id="regFullName" placeholder="Full Name" required><br>
            <select id="regCountry" required>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
            </select><br>
            <input type="date" id="regBirthdate" required><br>
            <button type="submit">Register</button>
        </form>
    `;
  render(template);
}

function showLogin() {
  const template = `
        <form onsubmit="login(event)">
            <h2>Login</h2>
            <input type="email" id="loginEmail" placeholder="Email" required><br>
            <input type="password" id="loginPassword" placeholder="Password" required><br>
            <button type="submit">Sign In</button>
        </form>
    `;
  render(template);
}

function showProfile(user) {
  const template = `
        <h2>Welcome ${user.fullName}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Full Name:</strong> ${user.fullName}</p>
        <p><strong>Country:</strong> ${user.country}</p>
        <p><strong>Birthdate:</strong> ${user.birthdate}</p>
        <button class="logout-btn" onclick="logout()">Logout</button>
    `;
  render(template);
  document.getElementById("nav").innerHTML = `
        <a href="#" id="tweets">Tweets</a>
        <a href="#">${user.fullName}</a>
        <a href="#" onclick="logout()">Logout</a>
    `;
}

function register(event) {
  event.preventDefault();
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;
  const fullName = document.getElementById("regFullName").value;
  const country = document.getElementById("regCountry").value;
  const birthdate = document.getElementById("regBirthdate").value;

  users.push({ email, password, fullName, country, birthdate });
  alert("Registration successful!");
  showLogin();
}

function login(event) {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    showProfile(user);
  } else {
    alert("Invalid email or password!");
  }
}

function logout() {
  showLogin();
  document.getElementById("nav").innerHTML = `
        <a href="#" id="tweets">Tweets</a>
        <a href="#" id="loginLink">Login</a>
        <a href="#" id="registerLink">Register</a>
    `;
}

document.getElementById("registerLink").addEventListener("click", showRegister);
document.getElementById("loginLink").addEventListener("click", showLogin);

showLogin();
