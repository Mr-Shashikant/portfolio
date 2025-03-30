import readingImg from "../assets/my_book_reading_image.jpg";
import playImg from "../assets/playing-img.jpg";
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
                <p className="text-xl/loose text-justify">I am a passionate front-end developer with expertise in HTML, CSS, JavaScript, and Tailwind CSS. My CSS skills have earned me the title of "CSS Master" among peers, though I also have a solid command of JavaScript. To enhance my productivity, I am currently learning React and expanding my skills in modern web development. Additionally, I have experience with Figma for UI/UX design and understand Git and GitHub for version control and collaboration. My passion for technology extends beyond development—I actively participate in IT-related competitions, having won multiple medals, even at the state level, in the annual quiz competition organized by my school's parent organization. I also hold 15+ certifications in various programming languages from different platforms.</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-20 mt-20" id="about2" >
                <img src={playImg} alt="Author photo reading a book" className="max-h-[70vh] rounded-2xl grayscale-50 hover:grayscale-0" />
                <p className="text-xl/loose text-justify">Beyond tech, I am a curious explorer with a deep love for reading, writing, and discovering new things. Travel fascinates me, and my ultimate dream is to embark on a solo world tour. I also enjoy playing badminton and maintaining personal streaks, which helps me stay disciplined. To ensure a balanced life, I practice daily exercise and yoga for energy and well-being. A lover of peace, I find joy in simple moments and always strive for excellence in both academics and life.</p>
            </div>
        </section>
    )
}

export default About;