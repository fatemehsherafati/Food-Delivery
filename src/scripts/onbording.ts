export function showOnboarding() {
    const onboarding = document.getElementById("onboarding")!;
    const slidesContainer = onboarding.querySelector(".slides-container") as HTMLElement;
    const slides = onboarding.querySelectorAll(".slide");
    const nextBtn = document.getElementById("next")!;
    const skipBtn = document.getElementById("skip")!;
    let currentSlide = 0;
    const totalSlides = slides.length;

    const setupSlides = () => {
        slidesContainer.style.display = 'flex';
        slidesContainer.style.width = `${totalSlides * 100}%`;
        slidesContainer.style.transition = 'transform 0.3s ease-in-out';
        
        slides.forEach(slide => {
            (slide as HTMLElement).style.width = `${100 / totalSlides}%`;
            (slide as HTMLElement).style.flexShrink = '0';
        });
    };

    const updateUI = () => {
        slidesContainer.style.transform = `translateX(-${(100 / totalSlides) * currentSlide}%)`;
        

        if (currentSlide === totalSlides - 1) {
            nextBtn.textContent = 'Get Started';
            skipBtn.style.display = 'none';
        } else {
            nextBtn.textContent = 'Next';
            skipBtn.style.display = 'inline-block';
        }
    };
    
    const completeOnboarding = () => {
        localStorage.setItem('hasCompletedOnboarding', 'true');
        onboarding.style.display = 'none';
        document.getElementById("location")?.classList.remove("hidden");
    };
    

    nextBtn.addEventListener('click', () => {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateUI();
        } else {
            completeOnboarding();
        }
    });
    
    skipBtn.addEventListener('click', completeOnboarding);
    
    setupSlides();
    updateUI();
}
