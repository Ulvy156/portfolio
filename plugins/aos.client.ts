import AOS from 'aos';
import 'aos/dist/aos.css'

export default defineNuxtPlugin(() => {
  if (process.client) {
    AOS.init({
      duration: 1000, // animation duration
      once: false     // whether animation should happen only once
    })
  }
})
