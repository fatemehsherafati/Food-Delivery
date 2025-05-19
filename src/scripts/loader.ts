export function showLoader(): void{
    const loader = document.getElementById('loader')!;
    loader.style.display ="flex";
    setTimeout(()=> {
        loader.style.display="none";
    }, 3000);
}