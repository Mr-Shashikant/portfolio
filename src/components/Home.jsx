import bgImage from "../assets/section.svg"
import heroImage from "../assets/hero_img.webp"
import PreloadImage from "./PreloadImage"

function Home() {

    return (
        <section id="home" className="pt-25 bg-top bg-cover bg-no-repeat flex flex-col items-center min-h-screen" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="text-lg">Hey there 👋</div>
            <PreloadImage />
            <div className="text-white/70 text-lg">I'm</div>
            <h2 className="text-5xl font-extrabold text-cyan-300 drop-shadow-[0_0_20px_#53eafd40] hover:drop-shadow-[0_0_20px_#53eafd80] transition-all duration-300">SHASHIKANT</h2>
            <div className="text-lg text-white/70 mb-8">Tech enthusiastic Web Developer </div>
            <div className="flex justify-center items-center gap-6">
                <a href="#contact"><button class="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-white/10 bg-gradient-to-r to-cyan-400 from-cyan-300 drop-shadow-[0_0_20px_#53eafd40] hover:drop-shadow-[0_0_20px_#53eafd80] transition-all duration-300 text-black text-lg font-medium opacity-85 backdrop-blur-xs px-7 py-3">Get in Touch</button></a>
                <a href="#about" className="underline cursor-pointer hover:no-underline hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.25)] p-5">Know more</a>
            </div>
        </section>
    )
}

export default Home;