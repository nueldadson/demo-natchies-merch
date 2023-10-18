import { headerLogo } from "../assets/images";
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarContent,
	SidebarMenu,
	SidebarLink,
	SidebarIcon,
	LinkedinIcon,
	InstagramIcon,
	TwitterIcon,
} from "./Sidebarelements";
import { HashLink as Link } from "react-router-hash-link";

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<>
			<SidebarContainer isOpen={isOpen} onClick={toggle}>
				<img
					src={headerLogo}
					alt="logo"
					className="mt-1 w-[250px] h-[50px] mt-8 ml-8 absolute"
				/>
				<Icon onClick={toggle} className="mr-8 mt-6">
					<CloseIcon />
				</Icon>
				<SidebarContent>
					<SidebarMenu>
						{/* <Link smooth to="/"> */}
						<SidebarLink onClick={toggle} href="#about-us">
							About Us
						</SidebarLink>
						{/* </Link> */}
						{/* <Link smooth to="/"> */}
						<SidebarLink onClick={toggle} href="#products">
							Product
						</SidebarLink>
						<SidebarLink onClick={toggle} href="#contact-us">
							Contact
						</SidebarLink>
						{/* </Link> */}
						{/* <Link smooth to="/"> */}
						<SidebarLink
							onClick={toggle}
							href="https://aquamarine-chaja-0119a9.netlify.app/"
						>
							Sign In
						</SidebarLink>
						<SidebarLink
							onClick={toggle}
							href="https://aquamarine-chaja-0119a9.netlify.app/"
							className="pb-8"
						>
							Explore Now
						</SidebarLink>
						{/* </Link> */}
					</SidebarMenu>
					<SidebarIcon>
						<LinkedinIcon />
						<InstagramIcon />
						<TwitterIcon />
					</SidebarIcon>
				</SidebarContent>
			</SidebarContainer>
		</>
	);
};

export default Sidebar;
