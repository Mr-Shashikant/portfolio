import logoImage from "../assets/logo.png";
import profileImage from "../assets/profile-image.jpg";

function Header() {
    function openMenu() {
        document.getElementById("ham-menu").style.display = "flex";
    }
    function closeMenu() {
        document.getElementById("ham-menu").style.display = "none";
    }
    return (
        <>
            <header className="z-20 flex md:justify-around items-center fixed top-0 py-6 w-screen px-5 md:px-0 justify-between bg-white/5 lg:bg-transparent bg-opacity-50 backdrop-blur-lg lg:backdrop-blur-none shadow-lg lg:shadow-none">
                <img src={logoImage} alt="Logo Image" className="h-10" />
                <nav className="hidden lg:flex items-center space-x-8 border border-white/10 bg-white/5 bg-opacity-50 backdrop-blur-lg px-6 py-2 rounded-full shadow-lg">

                    <a href="#top" className="text-white/70 hover:text-white transition-all duration-300">Home</a>
                    <a href="#about" className="text-white/70 hover:text-white transition-all duration-300">About</a>
                    <a href="#skills" className="text-white/70 hover:text-white transition-all duration-300">Skills</a>
                    <a href="#projects" className="text-white/70 hover:text-white transition-all duration-300">Projects</a>
                    <a href="#certificates" className="text-white/70 hover:text-white transition-all duration-300">More</a>
                    <a href="#contact"><button className="bg-linear-to-t from-white/50 to-white/10 rounded-full px-3 py-2 opacity-80 backdrop-blur-xs drop-shadow-[0_10px_10px_rgba(255,255,255,0.5)] tansition-all duration-300 hover:opacity-90 hover:drop-shadow-[0_5px_10px_rgba(255,255,255,0.5)] cursor-pointer">Contact now</button></a>
                </nav>
                <img src={profileImage} alt="Profile Picture" className="hidden lg:block h-10 rounded-full grayscale" />

                {/* Hamburger menu for small devices */}
                <div onClick={openMenu} className="lg:hidden flex-col justify-between space-y-1 ">
                    <span className="block w-6 h-1 rounded-full bg-white"></span>
                    <span className="block w-6 h-1 rounded-full bg-white"></span>
                    <span className="block w-6 h-1 rounded-full bg-white"></span>
                </div>
            </header>
            <div id="ham-menu" className="z-30 hidden fixed w-screen h-screen top-0 left-0 bg-[rgb(17,24,39)]/90 backdrop-blur-lg flex flex-col justify-around items-center  transition-all duration-300">
                <a href="#top" className="text-white/70 hover:text-white transition-all duration-300" onClick={closeMenu}>Home</a>
                <a href="#about" className="text-white/70 hover:text-white transition-all duration-300" onClick={closeMenu}>About</a>
                <a href="#skills" className="text-white/70 hover:text-white transition-all duration-300" onClick={closeMenu}>Skills</a>
                <a href="#projects" className="text-white/70 hover:text-white transition-all duration-300" onClick={closeMenu}>Projects</a>
                <a href="#certificates" className="text-white/70 hover:text-white transition-all duration-300" onClick={closeMenu}>More</a>
            </div>
        </>
    )
}

export default Header;