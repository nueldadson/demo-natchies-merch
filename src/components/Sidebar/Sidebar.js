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
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			{/* <Icon onClick={toggle}>
        <CloseIcon />
      </Icon> */}
			<SidebarContent>
				<SidebarMenu>
					<Link smooth to="#about">
						<SidebarLink onClick={toggle}>About Us</SidebarLink>
					</Link>
					<Link smooth to="/">
						<SidebarLink onClick={toggle}>Contact Us</SidebarLink>
					</Link>
					<Link smooth to="/">
						<SidebarLink onClick={toggle}>FAQs</SidebarLink>
					</Link>
				</SidebarMenu>
				<SidebarIcon>
					<div>
						<LinkedinIcon />
						<InstagramIcon />
						<TwitterIcon />
					</div>
				</SidebarIcon>
			</SidebarContent>
		</SidebarContainer>
	);
};

export default Sidebar;
