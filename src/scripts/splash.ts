export function showSplash(): void {
  const splash = document.getElementById("splash")!;
  const loader = document.getElementById("loader")!;

  if (!localStorage.getItem("splashSeen")) {
    splash.style.display = "flex";
    loader.classList.add("hidden");

    setTimeout(() => {
      splash.style.display = "none";
      loader.classList.remove("hidden");
      localStorage.setItem("splashSeen", "true");
    }, 3000);
  } else {
    splash.style.display = "none";
    loader.classList.remove("hidden");
  }
}
