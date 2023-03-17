import gsap from "gsap"

const beforeEnter = (el) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(60px)";
}
const enter = (el) => {
    gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        delay: el.dataset.index * 0.1
    })
}

export { beforeEnter, enter }