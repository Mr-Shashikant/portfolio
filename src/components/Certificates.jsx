import angular from "../assets/certificates/angular.webp";
import beginnerChallenge from "../assets/certificates/beginner-challenge.webp";
import codingForData from "../assets/certificates/coding-for-data.webp";
import codingFoundation from "../assets/certificates/coding-foundation.webp";
import frontend from "../assets/certificates/frontend-for-beginners.webp";
import gameDevWithJS from "../assets/certificates/game-dev-with-js.webp";
import CIntro from "../assets/certificates/intro-to-c.webp";
import CSSIntro from "../assets/certificates/intro-to-css.webp";
import htmlIntro from "../assets/certificates/intro-to-html.webp";
import JSIntro from "../assets/certificates/intro-to-javascript.webp";
import pythonIntro from "../assets/certificates/intro-to-python.webp";
import SQLIntro from "../assets/certificates/intro-to-sql.webp";
import JSInter from "../assets/certificates/javascript-inter.webp";
import mimoHTML from "../assets/certificates/mimo-html.webp";
import mimoJS from "../assets/certificates/mimo-javascript.webp";
import pythonDev from "../assets/certificates/python-developer.webp";
import pythonInter from "../assets/certificates/python-inter.webp";
import sqlInter from "../assets/certificates/sql-inter.webp";
import techForEveryone from "../assets/certificates/tech-for-everyone.webp";
import slWebDev from "../assets/certificates/web-dev-sl.webp";

function Certificates() {
    return (
        <section id="certificates" className="pt-30">
            <div className="flex justify-center items-center">
                <h2 className="flicker text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-emerald-300 mb-1 inline-block drop-shadow-[0_0_5px_#53eafd60,0_0_10px_#c27aff60,0_0_20px_#5ee9b560]">Certificates</h2>
            </div>
            <p className="text-slate-400 text-center mb-10">Explore my taste of languages</p>
            <div className="certificate-holder-container">
                <div className="certificates-track">
                    <div className="certificate-holder">
                        <img className="certificate" src={angular} alt="angular" loading="lazy" />
                        <img className="certificate" src={beginnerChallenge} alt="Beginner Challenge" loading="lazy" />
                        <img className="certificate" src={codingForData} alt="Coding for data" loading="lazy" />
                        <img className="certificate" src={codingFoundation} alt="Coding foundation" loading="lazy" />
                        <img className="certificate" src={frontend} alt="Frontend for beginners" loading="lazy" />
                        <img className="certificate" src={gameDevWithJS} alt="game development with js" loading="lazy" />
                        <img className="certificate" src={CIntro} alt="Introduction to C" loading="lazy" />
                        <img className="certificate" src={CSSIntro} alt="Introduction to CSS" loading="lazy" />
                        <img className="certificate" src={htmlIntro} alt="Introduction to HTML" loading="lazy" />
                        <img className="certificate" src={JSIntro} alt="Introduction to JS" loading="lazy" />
                        <img className="certificate" src={pythonIntro} alt="Introduction to Python" loading="lazy" />
                        <img className="certificate" src={SQLIntro} alt="Introduction to SQL" loading="lazy" />
                        <img className="certificate" src={JSInter} alt="JS Intermediate" loading="lazy" />
                        <img className="certificate" src={mimoHTML} alt="HTML" loading="lazy" />
                        <img className="certificate" src={mimoJS} alt="JavaScript" loading="lazy" />
                        <img className="certificate" src={pythonDev} alt="Python Developer" loading="lazy" />
                        <img className="certificate" src={pythonInter} alt="Python Intermediate" loading="lazy" />
                        <img className="certificate" src={sqlInter} alt="SQL Intermediate" loading="lazy" />
                        <img className="certificate" src={techForEveryone} alt="Tech for Eveyone" loading="lazy" />
                        <img className="certificate" src={slWebDev} alt="Web Development" loading="lazy" />
                    </div>

                    {/* Duplicating for infinite scroll */}
                    <div className="certificate-holder">
                        <img className="certificate" src={angular} alt="angular" loading="lazy" />
                        <img className="certificate" src={beginnerChallenge} alt="Beginner Challenge" loading="lazy" />
                        <img className="certificate" src={codingForData} alt="Coding for data" loading="lazy" />
                        <img className="certificate" src={codingFoundation} alt="Coding foundation" loading="lazy" />
                        <img className="certificate" src={frontend} alt="Frontend for beginners" loading="lazy" />
                        <img className="certificate" src={gameDevWithJS} alt="game development with js" loading="lazy" />
                        <img className="certificate" src={CIntro} alt="Introduction to C" loading="lazy" />
                        <img className="certificate" src={CSSIntro} alt="Introduction to CSS" loading="lazy" />
                        <img className="certificate" src={htmlIntro} alt="Introduction to HTML" loading="lazy" />
                        <img className="certificate" src={JSIntro} alt="Introduction to JS" loading="lazy" />
                        <img className="certificate" src={pythonIntro} alt="Introduction to Python" loading="lazy" />
                        <img className="certificate" src={SQLIntro} alt="Introduction to SQL" loading="lazy" />
                        <img className="certificate" src={JSInter} alt="JS Intermediate" loading="lazy" />
                        <img className="certificate" src={mimoHTML} alt="HTML" loading="lazy" />
                        <img className="certificate" src={mimoJS} alt="JavaScript" loading="lazy" />
                        <img className="certificate" src={pythonDev} alt="Python Developer" loading="lazy" />
                        <img className="certificate" src={pythonInter} alt="Python Intermediate" loading="lazy" />
                        <img className="certificate" src={sqlInter} alt="SQL Intermediate" loading="lazy" />
                        <img className="certificate" src={techForEveryone} alt="Tech for Eveyone" loading="lazy" />
                        <img className="certificate" src={slWebDev} alt="Web Development" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certificates;