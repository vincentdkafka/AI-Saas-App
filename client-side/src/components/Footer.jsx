import { assets } from "../assets/assets";

export default function Footer() {
    return (
        <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
                <div className="md:max-w-96">
                    <img src={assets.harshlogo} alt="" />
                    <p className="mt-2 text-sm">
                        Harsh-AI is an all-in-one SaaS platform designed to simplify your creative and professional work. From generating AI-powered images to reviewing resumes, crafting engaging titles, and writing blogs, everything you need lives in one place.
                    </p>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-14">
                    <div>
                        <h2 className="font-semibold mb-3 text-gray-800">Company</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">AI-tools</a></li>
                            <li><a href="#">Plans</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-3 text-gray-800">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>+91 7053091501</p>
                            <p>harshkurware03@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-xs md:text-sm pb-5">
                Copyright 2025 © <a href="https://www.linkedin.com/in/harshkurware22/">Harsh Kurware</a>. All Right Reserved.
            </p>
        </footer>
    );
};