import bgImage from "../assets/section.svg"
import heroImage from "../assets/hero_img.webp"
import PreloadImage from "./PreloadImage"

function Home() {

    return (
        <section id="home" className="pt-25 bg-top bg-cover bg-no-repeat flex flex-col items-center min-h-screen" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="text-lg">Hey there 👋</div>
            {/* <img fetchpriority="high" src={heroImage} alt="Hero bg image" className="h-100 rounded-lg grayscale hover:grayscale-0 transition-all duration-300 mt-5 mb-2"  /> */}
            <PreloadImage />
            <div className="text-white/70 text-lg">I'm</div>
            <h2 className="text-5xl font-extrabold text-cyan-300 drop-shadow-[0_0_20px_#53eafd40] hover:drop-shadow-[0_0_20px_#53eafd80] transition-all duration-300">SHASHIKANT</h2>
            <div className="text-lg text-white/70 mb-8">Tech enthusiastic Web Developer </div>
            <div className="flex justify-center items-center gap-6">
                <a href="#contact"><button class="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-white/10 bg-white/10 py-[3px] pl-2 pr-[3px] text-base font-medium opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pl-3 md:pr-1"><span class="z-10 px-3 text-white transition-colors duration-300 group-hover:text-black">Get in Touch</span><span class="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"></span><span class="z-10 flex items-center justify-center overflow-hidden rounded-full bg-white p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right text-black transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right absolute -translate-x-5 text-black opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span></button></a>
                <a href="#about" className="underline cursor-pointer hover:no-underline hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.25)] p-5">Know more</a>
            </div>
        </section>
    )
}

export default Home;