import ticTacToeImg from "../assets/tic-tac-toe.jpeg";
import usernameGeneratorImg from "../assets/username-generator.jpeg";
import darkModeImg from "../assets/dark-mode-without-js.jpeg";
import rakshabandhanSpecialImg from "../assets/rakshabandhan.jpeg";
import simpleCounterImg from "../assets/simple-counter.jpeg";
import bgImage from "../assets/section.svg";

function Projects() {
    const projectsArr = [
        {
            img: {
                src: ticTacToeImg,
                alt: "Project image"
            },
            github: "https://github.com/Mr-Shashikant/tic-tac-toe",
            live: "https://enjoy-tic-tac-toe.vercel.app/",
            title: "Tic Tac Toe game - 2 players",
            description: "Enjoy a sleek, interactive Tic-Tac-Toe game with a modern UI. Play against friends, experience smooth animations, and enjoy a responsive design. Built for fun and simplicity, it's perfect for quick matches anytime! Play now!"
        },
        {
            img: {
                src: usernameGeneratorImg,
                alt: "Project image"
            },
            github: "https://github.com/Mr-Shashikant/Username-Generator-2.0",
            live: "https://username-generator-v2.vercel.app/",
            title: "Username Generator 2.0",
            description: "Generate unique usernames effortlessly with this advanced tool. Customize length, style, and randomness to get the perfect username for any platform. Try it now!"
        },
        {
            img: {
                src: darkModeImg,
                alt: "Project image"
            },
            github: "https://github.com/Mr-Shashikant/Dark-mode-switcher-without-JS",
            live: "https://mr-shashikant.github.io/Dark-mode-switcher-without-JS/",
            title: "Dark Mode Switcher without JS",
            description: "Experience a seamless dark mode switcher powered entirely by CSS. Lightweight, efficient, and easy to integrate into any website. No JavaScript required!"
        },
        {
            img: {
                src: rakshabandhanSpecialImg,
                alt: "Project image"
            },
            github: "https://github.com/Mr-Shashikant/Rakshabandhan-Special",
            live: "https://rakshabandhan-special-from-shashikant.vercel.app/",
            title: "Rakshabandhan Special",
            description: "Celebrate Rakshabandhan with a beautifully designed webpage. Enjoy festive visuals, heartfelt messages, and a delightful user experience. A perfect digital tribute to sibling love!"
        },
        {
            img: {
                src: simpleCounterImg,
                alt: "Project image"
            },
            github: "https://github.com/Mr-Shashikant/simple-counter",
            live: "https://my-simple-counter.vercel.app/",
            title: "Simple Counter",
            description: "A minimalistic counter app with an intuitive UI. Easily increment, decrement, or reset the count. Perfect for tracking anything with simplicity and ease!"
        },
    ];

    const cards = [];
    for (let i = 0; i < projectsArr.length; i++) {
        cards.push(<Card {...projectsArr[i]} />)
    }
    return (
        <section id="projects" className="pt-20 mt-30 bg-top bg-contain bg-no-repeat flex flex-col items-center px-10 mb-20" style={{ backgroundImage: `url(${bgImage})` }}>
            <h2 className="text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-emerald-300 mb-1">Projects</h2>
            <div className="text-white/70 mb-10">Explore my journey through my codes</div>
            <div className="flex flex-col justify-center items-center gap-10">
                {cards}
            </div>
        </section>
    )
}

function Card(props) {
    return (
        <div className="flex flex-col justify-center items-center gap-5 max-w-200 bg-[#0a1428] hover:bg-[#081020] rounded-xl hover:-translate-y-2 hover:shadow-emerald-300/2 hover:shadow-xl transition-all duration-300">
            <img src={props.img.src} alt={props.img.alt} className="rounded-t-xl" />
            <div className="px-5">
                <h3 className="text-3xl font-bold text-emerald-300 my-6">{props.title}</h3>
                <div className="text-slate-300">{props.description}</div>
                <div className="flex justify-self-start items-center gap-2 mt-5 mb-5">
                    <a href={props.github} target="_blank" className="h-10 w-10 rounded-full flex justify-center items-center p-1 border text-emerald-300 opacity-70 hover:opacity-100 cursor-pointer"><svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="#5ee9b5" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265" /></svg></a>
                    <a href={props.live} target="_blank" className="h-10 w-10 rounded-full flex justify-center items-center p-1 border text-emerald-300 opacity-70 hover:opacity-100 cursor-pointer"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 5C13.4477 5 13 4.55228 13 4C13 3.44772 13.4477 3 14 3H20C20.5523 3 21 3.44772 21 4V10C21 10.5523 20.5523 11 20 11C19.4477 11 19 10.5523 19 10V6.41421L11.7071 13.7071C11.3166 14.0976 10.6834 14.0976 10.2929 13.7071C9.90237 13.3166 9.90237 12.6834 10.2929 12.2929L17.5858 5H14ZM5 7C4.44772 7 4 7.44772 4 8V19C4 19.5523 4.44772 20 5 20H16C16.5523 20 17 19.5523 17 19V14.4375C17 13.8852 17.4477 13.4375 18 13.4375C18.5523 13.4375 19 13.8852 19 14.4375V19C19 20.6569 17.6569 22 16 22H5C3.34315 22 2 20.6569 2 19V8C2 6.34315 3.34315 5 5 5H9.5625C10.1148 5 10.5625 5.44772 10.5625 6C10.5625 6.55228 10.1148 7 9.5625 7H5Z" fill="#5ee9b5" />
                    </svg></a>
                </div>
            </div>
        </div>
    )
}

export default Projects;