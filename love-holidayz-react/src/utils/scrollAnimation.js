import ScrollReveal from "scrollreveal"

export const revealAnimation = () => {

const sr = ScrollReveal({
distance: "60px",
duration: 1200,
delay: 200,
reset: false
})

sr.reveal(".hero-content", { origin: "bottom" })
sr.reveal(".section-title", { origin: "top" })
sr.reveal(".package-card", { origin: "bottom", interval: 150 })
sr.reveal(".tour-card", { origin: "bottom", interval: 150 })
sr.reveal(".international-card", { origin: "bottom", interval: 150 })
sr.reveal(".why-card", { origin: "bottom", interval: 150 })
sr.reveal(".testimonial-card", { origin: "bottom", interval: 150 })

}