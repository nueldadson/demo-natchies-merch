import {
	facebook,
	instagram,
	shieldTick,
	support,
	truckFast,
	twitter,
} from "../assets/icons";
import {
	bigShoe1,
	bigShoe2,
	bigShoe3,
	customer1,
	customer2,
	shoe4,
	shoe5,
	shoe6,
	shoe7,
	thumbnailShoe1,
	thumbnailShoe2,
	thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
	{ href: "#home", label: "Home" },
	{ href: "#about-us", label: "About Us" },
	{ href: "#products", label: "Products" },
	{ href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
	{
		thumbnail: thumbnailShoe1,
		bigShoe: bigShoe1,
	},
	{
		thumbnail: thumbnailShoe2,
		bigShoe: bigShoe2,
	},
	{
		thumbnail: thumbnailShoe3,
		bigShoe: bigShoe3,
	},
];

export const statistics = [
	{ value: "37+", label: "Brands" },
	{ value: "35+", label: "Shops" },
	{ value: "250k+", label: "Customers" },
];

export const products = [
	{
		imgURL: shoe4,
		name: "Naked Wolfe Kosa Blue",
		oldprice: 50000,
		price: 42000,
	},
	{
		imgURL: shoe5,
		name: "Nike Air Force-1",
		oldprice: 50000,
		price: 20000,
	},
	{
		imgURL: shoe6,
		name: "Nike Dunk Low",
		oldprice: 50000,
		price: 22000,
	},
	{
		imgURL: shoe7,
		name: "Nike Air Jordan-1 Mid SE",
		oldprice: 50000,
		price: 45000,
	},
	{
		imgURL: shoe7,
		name: "Nike Air Jordan-1 Mid SE",
		oldprice: 50000,
		price: 45000,
	},
	{
		imgURL: shoe7,
		name: "Nike Air Jordan-1 Mid SE",
		oldprice: 50000,
		price: 45000,
	},
	{
		imgURL: shoe7,
		name: "Nike Air Jordan-1 Mid SE",
		oldprice: 50000,
		price: 45000,
	},
	{
		imgURL: shoe7,
		name: "Nike Air Jordan-1 Mid SE",
		oldprice: 50000,
		price: 45000,
	},
];

export const services = [
	{
		imgURL: truckFast,
		label: "Free Shipping/delivery",
		subtext:
			"Enjoy seamless shopping with our complimentary shipping and delivery service.",
	},
	{
		imgURL: shieldTick,
		label: "Secure Payment",
		subtext:
			"Experience worry-free transactions with our secure payment options.",
	},
	{
		imgURL: support,
		label: "Love to help you",
		subtext: "Our dedicated team is here to assist you every step of the way.",
	},
];

export const reviews = [
	{
		imgURL: customer1,
		customerName: "Tijani Wahab",
		rating: 4.5,
		feedback:
			"The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
	},
	{
		imgURL: customer2,
		customerName: "Gideon-Dada",
		rating: 4.5,
		feedback:
			"The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
	},
];

export const footerLinks = [
	{
		title: "Products",
		links: [
			{ name: "Naked Wolfe Kosa Blue", link: "/" },
			{ name: "Nike Air Force-1", link: "/" },
			{ name: "Nike Dunk Low", link: "/" },
			{ name: "OFF-White High Top SNeakers", link: "/" },
			{ name: "Adidas Superstar", link: "/" },
			{ name: "Nike Air Jordan-1 Mid SE", link: "/" },
			{ name: "More", link: "/" },
		],
	},
	{
		title: "Help",
		links: [
			{ name: "About us", link: "/" },
			{ name: "FAQs", link: "/" },
			{ name: "How it works", link: "/" },
			{ name: "Privacy policy", link: "/" },
			{ name: "Payment policy", link: "/" },
		],
	},
	{
		title: "Get in touch",
		links: [
			{ name: "customer@natchies.com", link: "/" },
			{ name: "+2349017448561", link: "/" },
		],
	},
];

export const socialMedia = [
	{ src: facebook, alt: "facebook logo" },
	{ src: twitter, alt: "twitter logo" },
	{ src: instagram, alt: "instagram logo" },
];
