import "../styles/style.css";
import { showSplash } from "./splash";
import { showLoader } from "./loader";
import { showOnboarding } from "./onbording";
import { getLocation } from "./location";
import { renderLogin } from "./login";

document.addEventListener("DOMContentLoaded", async () => {
  const onboardingSeen = localStorage.getItem("hasCompletedOnboarding");
  const onboarding = document.getElementById("onboarding")!;
  const getlocation = document.getElementById("location")!;
  const registration = document.getElementById("registration")!;
  const accessBtn = document.getElementById("accessBtn")!;

  await showSplash();
  await showLoader();

  if (!onboardingSeen) {
    showOnboarding();
  } else {
    onboarding.style.display = "none";
    getlocation.classList.remove("hidden");
    accessBtn.addEventListener("click", async () => {
      const location = await getLocation();
      console.log("User location:", location);

      getlocation.style.display = "none";
      registration.classList.remove("hidden");
      renderLogin();
    });
  }
});
