const iconBig = document.querySelector("#icon--big");
const iconSmall = document.querySelector("#icon--small");

const checkScreenWidth = () => {
    return window.innerWidth >= 1200;
}

const  updateImageSize =() => {
    if (checkScreenWidth()) {
        if (window.scrollY > 100) {
            iconBig.style.display = "none";
            iconSmall.style.display = "flex";
        } else {
            iconBig.style.display = "flex";
            iconSmall.style.display = "none";
        }
    } else {
        iconBig.style.display = "none";
        iconSmall.style.display = "none";
    }
}



window.addEventListener("load", updateImageSize);
window.addEventListener("resize", updateImageSize);
window.addEventListener("scroll", updateImageSize);
