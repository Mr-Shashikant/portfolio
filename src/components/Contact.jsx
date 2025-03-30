function Contact() {
    return (
        <section id="contact" className="pt-30 flex lg:flex-row flex-col justify-around items-center ">
            <div className="flex flex-col justify-center items-center mb-5" id="contact-heading">
                <h2 className="glitch-e text-cyan-300 text-4xl font-semibold " title="Get in Touch">Get in Touch</h2>
                <p className="text-slate-400 text-sm">Have a project in mind? Lets connect</p>
                <div className="flex flex-col items-start gap-5 mt-10">
                    <div className="flex justify-center items-center gap-5">
                        <div className="rounded-lg bg-cyan-300/10 p-3"><svg height="24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#53eafd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <rect x="3" y="5" width="18" height="14" rx="2" stroke="#53eafd" stroke-width="1.5" stroke-linecap="round" />
                        </svg></div>
                        <div className="flex flex-col justify-between ">
                            <h3 className="font-semibold">Email</h3>
                            <a href="mailto:mr.shashikant@yahoo.com" className="text-slate-400 hover:text-slate-300">mr.shashikant@yahoo.com</a>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-5">
                        <div className="rounded-lg bg-emerald-300/10 p-3">
                            <svg height="24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#5ee9b5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#5ee9b5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="flex flex-col justify-between ">
                            <h3 className="font-semibold">Location</h3>
                            <p className="text-slate-400">India</p>
                        </div>
                    </div>
                </div>
            </div>
            <form action="POST" className="flex flex-col gap-2 backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-xl lg:w-150 w-[80vw]">
                <label htmlFor="userName">Full Name</label>
                <input type="text" placeholder="eg. Shashikant" className="mb-3 w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors" id="userName" required />
                <label htmlFor="userEmail">Email</label>
                <input type="email" placeholder="eg. abc@example.com" className="mb-3 w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors" id="userEmail" required />
                <label htmlFor="userMobile">Phone Number (Optional)</label>
                <input type="tel" placeholder="eg. +91 98765 43210" className="mb-3 w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors" id="userMobile" />
                <label htmlFor="userSubject">Subject</label>
                <input type="text" placeholder="Your subject for contact" className="mb-3 w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors" id="userSubject" required />
                <label htmlFor="userMessage">Your message</label>
                <textarea name="userMessage" className="mb-3 w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors" id="userMessage" placeholder="Your project idea" required></textarea>
                <button type="submit" className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-lg rounded-lg py-2 cursor-pointer">Send Message</button>
            </form>
        </section>
    )
}

export default Contact;