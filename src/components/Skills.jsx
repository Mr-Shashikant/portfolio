import rotatingImg from "../assets/rotating_img.webp";
import cssLogo from "../assets/logo_css.webp";
import htmlLogo from "../assets/logo_html.webp";
import javascriptLogo from "../assets/logo_javascript.svg";
import tailwindLogo from "../assets/logo_tailwind.webp";
import reactLogo from "../assets/logo_react.svg";
import gitLogo from "../assets/logo_git.png";
import githubLogo from "../assets/logo_github.png";
import figmaLogo from "../assets/logo_figma.png";
import gsapLogo from "../assets/logo_gsap.png";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

function Skills() {
    useGSAP(() => {
        gsap.from("#rotating-img", {
            rotate: 360,
            scrollTrigger: {
                trigger: "#rotating-img",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        })
        gsap.utils.toArray(".skill").forEach((el, i) => {
            gsap.from(el, {
                rotate: 90,
                opacity: 0,
                scale: 0.1,
                duration: 0.6,
                ease: "power2.out",
                delay: i * 0.1,
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    end: "bottom top",
                    toggleActions: "play none none none",
                }
            });
        });
    })

    return (
        <section id="skills" className="mt-50">
            <div className="relative mx-auto size-fit overflow-hidden">
                <div
                    className="relative mx-auto size-[300px] translate-y-36 md:size-[380px] md:translate-y-40" id="rotating-img"
                    style={{ transform: "rotate(75.8355deg)" }}
                >
                    <img
                        src={rotatingImg}
                        draggable="false"
                        alt="skills cover rotating image"
                        className="z-8 w-full opacity-65 select-none"
                    />
                </div>

                <h2
                    className="relative text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl text-center z-9 pb-5 mb-0 md:mb-0 bottom-0 size-full"
                    style={{
                        textShadow:
                            "rgba(255, 255, 255, 0.05) 0px 4px 8px, rgba(255, 255, 255, 0.25) 0px 8px 30px",
                        opacity: 1,
                        transform: "none",
                    }}
                >
                    <p
                        className="mb-3 text-xs font-normal tracking-widest text-white/70 uppercase md:text-sm"
                        style={{ opacity: 1 }}
                    >
                        <span style={{ opacity: 1, transform: "none" }}>I</span>
                        <span style={{ opacity: 1, transform: "none" }}> </span>
                        <span style={{ opacity: 1, transform: "none" }}>c</span>
                        <span style={{ opacity: 1, transform: "none" }}>o</span>
                        <span style={{ opacity: 1, transform: "none" }}>n</span>
                        <span style={{ opacity: 1, transform: "none" }}>s</span>
                        <span style={{ opacity: 1, transform: "none" }}>t</span>
                        <span style={{ opacity: 1, transform: "none" }}>a</span>
                        <span style={{ opacity: 1, transform: "none" }}>n</span>
                        <span style={{ opacity: 1, transform: "none" }}>t</span>
                        <span style={{ opacity: 1, transform: "none" }}>l</span>
                        <span style={{ opacity: 1, transform: "none" }}>y</span>
                        <span style={{ opacity: 1, transform: "none" }}> </span>
                        <span style={{ opacity: 1, transform: "none" }}>t</span>
                        <span style={{ opacity: 1, transform: "none" }}>r</span>
                        <span style={{ opacity: 1, transform: "none" }}>y</span>
                        <span style={{ opacity: 1, transform: "none" }}> </span>
                        <span style={{ opacity: 1, transform: "none" }}>t</span>
                        <span style={{ opacity: 1, transform: "none" }}>o</span>
                        <span style={{ opacity: 1, transform: "none" }}> </span>
                        <span style={{ opacity: 1, transform: "none" }}>i</span>
                        <span style={{ opacity: 1, transform: "none" }}>m</span>
                        <span style={{ opacity: 1, transform: "none" }}>p</span>
                        <span style={{ opacity: 1, transform: "none" }}>r</span>
                        <span style={{ opacity: 1, transform: "none" }}>o</span>
                        <span style={{ opacity: 1, transform: "none" }}>v</span>
                        <span style={{ opacity: 1, transform: "none" }}>e</span>
                    </p>
                    <span>
                        <span>My Skills</span>{" "}
                        <span
                            className="text-colorfull animate-gradient-x font-nyght tracking-wide"
                            style={{ transform: "none" }}
                        ></span>
                    </span>
                </h2>

                <div className="absolute inset-0 z-8 bg-gradient-to-b from-transparent via-[rgb(17,24,39)]/7 to-[rgb(17,24,39)]"></div>
            </div>
            <div className="flex justify-center items-center">
                <div className="px-20 flex justify-center items-center flex-wrap gap-5 max-w-200 mt-20" id="skills-container">
                    <Cards img={{ src: cssLogo, alt: "CSS Logo" }} skillName="CSS" />
                    <Cards img={{ src: htmlLogo, alt: "HTML Logo" }} skillName="HTML" />
                    <Cards img={{ src: javascriptLogo, alt: "JavaScript Logo" }} skillName="JavaScript" />
                    <Cards img={{ src: tailwindLogo, alt: "Tailwind CSS Logo" }} skillName="TailwindCSS" />
                    <Cards img={{ src: reactLogo, alt: "React Logo" }} skillName="React" />
                    <Cards img={{ src: gitLogo, alt: "Git Logo" }} skillName="Git" />
                    <Cards img={{ src: githubLogo, alt: "GitHub Logo" }} skillName="GitHub" />
                    <Cards img={{ src: figmaLogo, alt: "Figma Logo" }} skillName="Figma" />
                    <Cards img={{ src: gsapLogo, alt: "GSAP Logo" }} skillName="GSAP" />
                </div>
            </div>
        </section>
    )
}

function Cards(prop) {
    return (
        <div className="skill inline-flex justify-center items-center gap-5 p-3 border-1 border-white/30 bg-white/5 bg-opacity-50 backdrop-blur-lg h-fit w-fit rounded-xl transition-all duration-300 hover:shadow-[0_5px_10px_rgba(255,255,255,0.05)] hover:-translate-y-1">
            <img src={prop.img.src} alt={prop.img.alt} className="h-8" />
            <p className="text-sm">{prop.skillName}</p>
        </div>
    )
}

export default Skills;