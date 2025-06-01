import readingImg from "../assets/my_book_reading_image.webp";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

function About() {
    useGSAP(() => {
        gsap.from("#about1 img", {
            rotate: -25,
            x: "-200%",
            scrollTrigger: {
                trigger: '#about1 img',
                start: "top 50%"
            }
        })
        gsap.from("#about1 p", {
            rotate: 25,
            x: "200%",
            scrollTrigger: {
                trigger: '#about1 p',
                start: "top 50%"
            }
        })
        gsap.from("#about2 img", {
            rotate: -25,
            x: "-200%",
            scrollTrigger: {
                trigger: '#about2 img',
                start: "top 50%"
            }
        })
        gsap.from("#about2 p", {
            rotate: 25,
            x: "200%",
            scrollTrigger: {
                trigger: '#about2 p',
                start: "top 50%"
            }
        })
    })
    return (
        <section id="about" className="px-10 pt-30">
            <div className="text-4xl font-semibold flex justify-center items-center mb-5" id="about-heading"><h2 className="glitch-e" title="About Me">About Me</h2></div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-20" id="about1" >
                <img src={readingImg} alt="Author photo reading a book" className="max-h-[70vh] rounded-2xl grayscale-50 hover:grayscale-0" />
                <p className="text-xl/loose text-justify">I’m a passionate front-end developer with strong skills in HTML, CSS, JavaScript, and Tailwind CSS—often called the “CSS Master” by my peers. I’m currently learning React to advance my productivity and modern web development knowledge. Alongside development, I use Figma for UI/UX design and understand Git and GitHub for collaboration. With over 15 certifications and multiple state-level wins in IT competitions, I blend technical expertise with a love for learning. Outside of tech, I enjoy reading, writing, badminton, and dream of a solo world tour. Daily exercise, yoga, and personal streaks help me stay disciplined, balanced, and driven.</p>
            </div>
        </section>
    )
}

export default About;