// import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUsers } from '@fortawesome/free-solid-svg-icons';
import { navLinks } from "../constants";
import './navs.css'; ''

const Nav = ({isOpen, toggle}) => {
	return (
		<header className="padding-x py-8 absolute z-10 w-full">
			<nav className="flex justify-between items-center max-container">
				<a href="/">
					<img
						src={headerLogo}
						alt="logo"
						width={129}
						height={29}
						className="m-0 w-[300px] h-[60px]"
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
				<div className="flex text-white font-bold gap-2 text-lg leading-normal  font-montserrat max-lg:hidden wide:mr-24">
					<a href="https://aquamarine-chaja-0119a9.netlify.app/">Sign in</a>
					<span>/</span>
					<a href="https://aquamarine-chaja-0119a9.netlify.app/">Explore now</a>
				</div>
				<div className="hidden max-lg:block">
					{/* <img src={hamburger} alt="hamburger icon" width={25} height={25} /> */}
					          <FontAwesomeIcon icon={isOpen ? faTimes : faUsers} class="iconn"  onClick={toggle}/>

				</div>
			</nav>
		</header>
	);
};

export default Nav;
