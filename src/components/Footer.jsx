import footerBgPattern from "../assets/footer-pattern.webp";
import nameLogo from "../assets/logo.png";

function Footer() {
    return (
        <section id="footer" className="mt-30" style={{ backgroundImage: `url(${footerBgPattern})`, backgroundPosition: "center", backgroundSize: "cover" }}>
            <div className="pt-10 flex flex-col bg-gradient-to-r from-cyan-300/10 via-transparent to-emerald-300/10">
                <div className="flex flex-col gap-20 md:flex-row md:gap-0 items-center md:items-start justify-around mb-10">
                    <div className="max-w-100 flex items-center flex-col md:items-start">
                        <img src={nameLogo} alt="Shashikant" className="w-50" />
                        <p className="text-slate-400 mt-3 text-center md:text-left">Always curious and searching. Love to transform ideas into reality.</p>
                        <div className="flex items-center gap-3 mt-3">
                            <a href="https://github.com/Mr-Shashikant"><svg width="24" height="24" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="#90a1b9" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265" /></svg></a>

                            <a href="https://www.sololearn.com/en/profile/29591511"><svg width="24" height="24" fill="none" stroke="#90a1b9" strokeWidth="2" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path class="a" d="M20.7143,30.3722c0-3.2261-6.3709-3.6715-6.3709-11.7725S18.8446,9.6954,18.8446,6.55,6.38,7.23,6.38,19.2922,20.7143,33.5983,20.7143,30.3722Z" /><path class="a" d="M30.3042,27.2168c-3.2261,0-3.6715,6.371-11.7724,6.371S9.6274,29.0865,6.4823,29.0865s.68,12.465,12.742,12.465S33.53,27.2168,30.3042,27.2168Z" /><path class="a" d="M17.6958,20.8178c3.2261,0,3.6714-6.371,11.7724-6.371s8.9044,4.5013,12.0495,4.5013-.68-12.465-12.742-12.465S14.47,20.8178,17.6958,20.8178Z" /><path class="a" d="M27.2864,17.6278c0,3.2261,6.371,3.6715,6.371,11.7725s-4.5012,8.9043-4.5012,12.05,12.465-.68,12.465-12.742S27.2864,14.4017,27.2864,17.6278Z" /></svg></a>

                            <a href="https://x.com/MrShashikantWeb"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#90a1b9" viewBox="0 0 16 16"> <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                            </svg></a>

                            <a href="https://peerlist.io/mrshashikant"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g fill="none" stroke="#90a1b9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"> <path d="M8.87 3h6.26a6 6 0 0 1 5.963 5.337l.21 1.896c.131 1.174.131 2.36 0 3.534l-.21 1.896A6 6 0 0 1 15.13 21H8.87a6 6 0 0 1-5.963-5.337l-.21-1.896a16 16 0 0 1 0-3.534l.21-1.896A6 6 0 0 1 8.87 3" /> <path d="M9 17v-4m0 0V7h4a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3z" /></g></svg></a>

                        </div>
                    </div>
                    <div className="max-w-100 md:max-w-80 flex flex-col items-center md:items-start">
                        <p className="text-slate-50 text-center md:text-left">Feel free to reach out to me for any inquiries or collaboration opportunities.</p>
                        <a href="mailto:mr.shashikant@yahoo.com" className="text-emerald-500 underline">mr.shashikant@yahoo.com</a>
                        <p className="text-slate-400 text-sm mt-3 text-center md:text-left">Attribute to <a href="https://asfakur-portfolio-nextjs.vercel.app/">Asfakur</a> and <a href="https://aayushbharti.in/">Aayush</a> for inspiring me in terms of design</p>
                    </div>
                </div>
                <div className="mx-[10%] w-[80%] h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                <div className="text-center my-7">
                    &copy; {new Date().getFullYear()} All rights reserved. Built with ❤️ using React, Tailwind CSS and GSAP. <br />
                    Developed By <a href="https://github.com/Mr-Shashikant" className="text-cyan-300 font-semibold">Shashikant</a>
                </div>
            </div>
        </section>
    )
}

export default Footer;