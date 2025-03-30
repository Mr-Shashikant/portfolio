import angular from "../assets/certificates/angular.png";
import beginnerChallenge from "../assets/certificates/beginner-challenge.jpg";
import codingForData from "../assets/certificates/coding-for-data.png";
import codingFoundation from "../assets/certificates/coding-foundation.png";
import frontend from "../assets/certificates/frontend-for-beginners.png";
import gameDevWithJS from "../assets/certificates/game-dev-with-js.png";
import CIntro from "../assets/certificates/intro-to-c.png";
import CSSIntro from "../assets/certificates/intro-to-css.png";
import htmlIntro from "../assets/certificates/intro-to-html.png";
import JSIntro from "../assets/certificates/intro-to-javascript.png";
import pythonIntro from "../assets/certificates/intro-to-python.png";
import SQLIntro from "../assets/certificates/intro-to-sql.png";
import JSInter from "../assets/certificates/javascript-inter.png";
import mimoHTML from "../assets/certificates/mimo-html.jpg";
import mimoJS from "../assets/certificates/mimo-javascript.jpg";
import pythonDev from "../assets/certificates/python-developer.png";
import pythonInter from "../assets/certificates/python-inter.png";
import sqlInter from "../assets/certificates/sql-inter.png";
import techForEveryone from "../assets/certificates/tech-for-everyone.png";
import slWebDev from "../assets/certificates/web-dev-sl.png";

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
                        <img className="certificate" src={angular} alt="angular" />
                        <img className="certificate" src={beginnerChallenge} alt="Beginner Challenge" />
                        <img className="certificate" src={codingForData} alt="Coding for data" />
                        <img className="certificate" src={codingFoundation} alt="Coding foundation" />
                        <img className="certificate" src={frontend} alt="Frontend for beginners" />
                        <img className="certificate" src={gameDevWithJS} alt="game development with js" />
                        <img className="certificate" src={CIntro} alt="Introduction to C" />
                        <img className="certificate" src={CSSIntro} alt="Introduction to CSS" />
                        <img className="certificate" src={htmlIntro} alt="Introduction to HTML" />
                        <img className="certificate" src={JSIntro} alt="Introduction to JS" />
                        <img className="certificate" src={pythonIntro} alt="Introduction to Python" />
                        <img className="certificate" src={SQLIntro} alt="Introduction to SQL" />
                        <img className="certificate" src={JSInter} alt="JS Intermediate" />
                        <img className="certificate" src={mimoHTML} alt="HTML" />
                        <img className="certificate" src={mimoJS} alt="JavaScript" />
                        <img className="certificate" src={pythonDev} alt="Python Developer" />
                        <img className="certificate" src={pythonInter} alt="Python Intermediate" />
                        <img className="certificate" src={sqlInter} alt="SQL Intermediate" />
                        <img className="certificate" src={techForEveryone} alt="Tech for Eveyone" />
                        <img className="certificate" src={slWebDev} alt="Web Development" />
                    </div>

                    {/* Duplicating for infinite scroll */}
                    <div className="certificate-holder">
                        <img className="certificate" src={angular} alt="angular" />
                        <img className="certificate" src={beginnerChallenge} alt="Beginner Challenge" />
                        <img className="certificate" src={codingForData} alt="Coding for data" />
                        <img className="certificate" src={codingFoundation} alt="Coding foundation" />
                        <img className="certificate" src={frontend} alt="Frontend for beginners" />
                        <img className="certificate" src={gameDevWithJS} alt="game development with js" />
                        <img className="certificate" src={CIntro} alt="Introduction to C" />
                        <img className="certificate" src={CSSIntro} alt="Introduction to CSS" />
                        <img className="certificate" src={htmlIntro} alt="Introduction to HTML" />
                        <img className="certificate" src={JSIntro} alt="Introduction to JS" />
                        <img className="certificate" src={pythonIntro} alt="Introduction to Python" />
                        <img className="certificate" src={SQLIntro} alt="Introduction to SQL" />
                        <img className="certificate" src={JSInter} alt="JS Intermediate" />
                        <img className="certificate" src={mimoHTML} alt="HTML" />
                        <img className="certificate" src={mimoJS} alt="JavaScript" />
                        <img className="certificate" src={pythonDev} alt="Python Developer" />
                        <img className="certificate" src={pythonInter} alt="Python Intermediate" />
                        <img className="certificate" src={sqlInter} alt="SQL Intermediate" />
                        <img className="certificate" src={techForEveryone} alt="Tech for Eveyone" />
                        <img className="certificate" src={slWebDev} alt="Web Development" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certificates;