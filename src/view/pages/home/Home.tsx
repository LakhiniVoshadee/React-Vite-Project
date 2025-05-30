import { Link } from "react-router-dom";

export function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0d1b2a] to-[#1b263b] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl w-full text-center py-16">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 transition-all duration-300">
                    Welcome to My Portfolio
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Discover my projects, skills, and passion for creating innovative solutions. Explore my work and get in touch to collaborate!
                </p>
                <div className="flex justify-center gap-4">
                    <Link
                        to="/projects"
                        className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-lg font-medium"
                    >
                        View Projects
                    </Link>
                    <Link
                        to="/contact"
                        className="bg-transparent border-2 border-blue-500 text-blue-500 py-3 px-6 rounded-md hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-lg font-medium"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 py-12">

            </div>
        </div>
    );
}