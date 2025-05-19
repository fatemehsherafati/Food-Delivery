import { renderLogin } from "./login";

export function renderForgotPassword() {
  const registration = document.getElementById("registration");
  if (!registration) return;

  registration.innerHTML = `
        <img src="/BG Asset.png" alt="backgrownd photo" class="registrationImg" />
        <div class="back-to-login">
          <a href="#" id="backToLogin">&#x2039;</a>
        </div>
        <h2 class="headingpassword">Forgot Password</h2>
        <p class="loginp">Please sign in to your existing account</p>
        <div class="login">
            <form class="loginCard">
                <div class="email">
                    <label for="resetEmail">EMAIL</label>
                    <input type="text" id="resetEmail" placeholder="example@gmail.com" required />
                </div>
                <button type="submit" class="submitbtn">SEND CODE</button>
            </form>
        </div>
    `;

  // Back to login
  document.getElementById("backToLogin")?.addEventListener("click", (e) => {
    e.preventDefault();
    renderLogin();
  });

  // Form submission
  document.querySelector(".loginCard")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = (document.getElementById("resetEmail") as HTMLInputElement)
      .value;
    console.log("Password reset requested for:", email);
    // Show success message
    registration.innerHTML = `
          <img src="BG Asset.png" alt="backgrownd photo" class="registrationImg" />
          <div class="back-to-login">
            <a href="#" id="backToLogin">&#x2039;</a>
          </div>
          <h2 class="verification">Verification</h2>
          <p class="loginp">We have sent a code to your email ${email}</p>
          <div class="login">
            <form class="loginCard">
              <div class="code-timer">
                <span class="code">CODE</span>
                  <div class="resnd">
                    <span class="timer-text">Resend</span>
                    <span id="timerdigit" class="timerdigit"> in.50sec</span>
                  </div>
              </div>
              <div class="code-inputs">
                <input type="text" maxlength="1" />
                <input type="text" maxlength="1" />
                <input type="text" maxlength="1" />
                <input type="text" maxlength="1" />
              </div>
              <button class="submitbtn">Verify</button>
            </form>
         </div>
        `;
    document.getElementById("backToLogin")?.addEventListener("click", (e) => {
      e.preventDefault();
      renderLogin();
    });

    let timeLeft = 50;
    const timerElement = document.getElementById("timerdigit");

    const timer = setInterval(() => {
      timeLeft--;
      if (timerElement) {
        timerElement.textContent = ` in ${timeLeft} sec`;
      }

      if (timeLeft <= 0) {
        clearInterval(timer);
      }
    }, 1000);
  });
}
