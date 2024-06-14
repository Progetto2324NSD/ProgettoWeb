import React, { useState } from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import { SlMenu } from "react-icons/sl";

const Navbar = ({ userInfo }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isToken = localStorage.getItem("token");
    const navigate = useNavigate();

    const onLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
            <h2 className="text-xl font-medium text-black py-2">Fitness Tracker</h2>

            {/* Hamburger Menu Icon for Mobile */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="focus:outline-none">
                    <SlMenu className="w-6 h-6"/>
                </button>
            </div>

            {/* Links for Desktop and Tablet */}
            {isToken && (
                <div className="hidden md:flex gap-4">
                    <a href="#" className="text-base font-medium text-gray-700 hover:text-sky-700 border-b-2 border-transparent hover:border-sky-700">
                        Dashboard
                    </a>
                    <a href="#" className="text-base font-medium text-gray-700 hover:text-sky-700 border-b-2 border-transparent hover:border-sky-700">
                        Workout
                    </a>
                    <a href="#" className="text-base font-medium text-gray-700 hover:text-sky-700 border-b-2 border-transparent hover:border-sky-700">
                        Tutorial
                    </a>
                    <a href="#" className="text-base font-medium text-gray-700 hover:text-sky-700 border-b-2 border-transparent hover:border-sky-700">
                        Contact
                    </a>
                </div>
            )}

            {/* Profile Info */}
            <ProfileInfo userInfo={userInfo} onLogout={onLogout} />

            {/* Dropdown Menu for Mobile */}
            {isMenuOpen && isToken && (
                <div className="absolute top-16 left-0 right-0 bg-white flex flex-col items-start px-6 py-2 drop-shadow md:hidden">
                    <a href="#" className="text-base font-medium text-gray-700 hover:text-sky-700 border-b-2 border-transparent hover:border-sky-700 w-full text-left py-2">
                    Dashboard
                    </a>
                    <a href="#" className="text-base font-medium text-gray-700 hover:text-sky-700 border-b-2 border-transparent hover:border-sky-700 w-full text-left py-2">
                    Workout
                    </a>
                    <a href="#" className="text-base font-medium text-gray-700 hover:text-sky-700 border-b-2 border-transparent hover:border-sky-700 w-full text-left py-2">
                    Tutorial
                    </a>
                    <a href="#" className="text-base font-medium text-gray-700 hover:text-sky-700 border-b-2 border-transparent hover:border-sky-700 w-full text-left py-2">
                    Contact
                    </a>
                </div>
            )}
        </div>
    );
};

export default Navbar;
