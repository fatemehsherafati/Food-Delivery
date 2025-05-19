import { renderLogin } from "./login";

export function renderSignUp() {
  const registration = document.getElementById("registration");
  if (!registration) return;

  registration.innerHTML = `
        <img src="/BG Asset.png" alt="backgrownd photo" class="registrationImg" />
        <div class="back-to-login">
            <a href="#" id="backToLogin">&#x2039;</a>
        </div>
        <h2>Sign Up</h2>
        <p class="loginp">Create a new account</p>
        <div class="login">
            <form class="loginCard">
                <div class="email">
                    <label for="name">NAME</label>
                    <input type="text" id="name" placeholder="John Doe" required />
                </div>
                <div class="email">
                    <label for="email">EMAIL</label>
                    <input type="text" id="email" placeholder="example@gmail.com" required />
                </div>
                <div class="password">
                    <label for="password">PASSWORD</label>
                    <div class="input-with-icon">
                        <input type="password" id="password" placeholder="**********" required />
                        <span id="toggle-password" class="eyeIcon">
                            <i class="fas fa-eye"></i>
                        </span>
                    </div>
                </div>
                <div class="password">
                    <label for="confirmPassword">Re-Type Password</label>
                    <div class="input-with-icon">
                        <input type="password" id="confirmPassword" placeholder="**********" required />
                        <span id="toggle-confirm-password" class="eyeIcon">
                            <i class="fas fa-eye"></i>
                        </span>
                    </div>
                </div>
                <button type="submit" class="submitbtn">SIGN UP</button>
            </form>
        </div>
    `;

  // Password toggles
  const setupPasswordToggle = (toggleId: string, inputId: string) => {
    const toggle = document.getElementById(toggleId);
    const input = document.getElementById(inputId) as HTMLInputElement;
    toggle?.addEventListener("click", () => {
      const icon = toggle.querySelector("i");
      if (input.type === "password") {
        input.type = "text";
        icon?.classList.replace("fa-eye", "fa-eye-slash");
      } else {
        input.type = "password";
        icon?.classList.replace("fa-eye-slash", "fa-eye");
      }
    });
  };

  setupPasswordToggle("toggle-password", "password");
  setupPasswordToggle("toggle-confirm-password", "confirmPassword");

  // Back to login
  document.getElementById("backToLogin")?.addEventListener("click", (e) => {
    e.preventDefault();
    renderLogin();
  });

  // Form submission
  document.querySelector(".loginCard")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement)
      .value;
    const confirmPassword = (
      document.getElementById("confirmPassword") as HTMLInputElement
    ).value;

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    console.log("Sign up attempt with:", { name, email, password });
  });
}
