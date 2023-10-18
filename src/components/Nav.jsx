import React from "react";
import { headerLogo } from "../assets/images";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { navLinks } from "../constants";
import "./navs.css";

const Nav = ({ isOpen, toggle }) => {
	const [isFixed, setIsFixed] = useState(false);

	const scrollThreshold = 100; // Adjust this value based on when you want the navbar to become fixed

	const handleScroll = () => {
		if (window.scrollY > scrollThreshold) {
			setIsFixed(true);
		} else {
			setIsFixed(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={`padding-x py-4 z-10 w-full ${
				isFixed ? "fixed top-0 bg-white shadow-md" : " absolute"
			}`}
		>
			<nav className="flex justify-between items-center max-container">
				<a href="/">
					<img
						src={headerLogo}
						alt="logo"
						className="mt-1 w-[250px] h-[50px]"
					/>
				</a>
				<ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
					{navLinks.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								className="font-montserrat leading-normal text-lg text-black font-bold"
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
				<div
					className={`flex  font-bold gap-2 text-lg leading-normal font-montserrat max-lg:hidden wide:mr-24 ${
						isFixed ? " text-coral-red " : "text-white"
					}`}
				>
					<a href="https://aquamarine-chaja-0119a9.netlify.app/">Sign in</a>
					<span>/</span>
					<a href="https://aquamarine-chaja-0119a9.netlify.app/">Explore now</a>
				</div>
				<div className="">
					{/* <img src={hamburger} alt="hamburger icon" width={25} height={25} /> */}
					{/* dcrfrfrubububububbub */}
					<FontAwesomeIcon
						icon={isOpen ? faTimes : faBars}
						className="iconn"
						onClick={toggle}
					/>
				</div>
			</nav>
		</header>
	);
};

export default Nav;
