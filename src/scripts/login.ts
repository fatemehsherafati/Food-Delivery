import { renderForgotPassword } from "./forgetpassword";
import { renderSignUp } from "./signup";

export function renderLogin() {
  const registration = document.getElementById("registration");
  if (!registration) return;

  registration.innerHTML = `
        <img src="/BG Asset.png" alt="backgrownd photo" class="registrationImg" />
        <h2>Log In</h2>
        <p class="loginp">Please sign in to your existing account</p>
        <div id="login" class="login">
            <form id="loginCard" class="loginCard">
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
                <div class="remember-forget">
                    <label for="checkbox">
                        <input type="checkbox" id="checkbox" class="checkbox" />
                        <span>Remember me</span>
                    </label>
                    <label for="forgetbtn">
                        <button type="button" class="forgetbtn" id="forgetbtn">
                            Forget Password
                        </button>
                    </label>
                </div>
                <button type="submit" id="submitbtn" class="submitbtn">LOG IN</button>
                <div class="registrationlink">
                    <p>Don't have an account? <a href="#" id="signupLink">SIGN UP</a></p>
                </div>
            </form>
        </div>
    `;

  // Password toggle
  const togglePassword = document.getElementById("toggle-password");
  const passwordInput = document.getElementById("password") as HTMLInputElement;

  togglePassword?.addEventListener("click", () => {
    const icon = togglePassword.querySelector("i");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      icon?.classList.replace("fa-eye", "fa-eye-slash");
    } else {
      passwordInput.type = "password";
      icon?.classList.replace("fa-eye-slash", "fa-eye");
    }
  });

  // Forget password button
  document.getElementById("forgetbtn")?.addEventListener("click", () => {
    renderForgotPassword();
  });

  // Sign up link
  document.getElementById("signupLink")?.addEventListener("click", (e) => {
    e.preventDefault();
    renderSignUp();
  });

  // Form submission
  document.getElementById("loginCard")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement)
      .value;
    console.log("Login attempt with:", { email, password });
  });
}
