import { Nav } from "./components";
import { useState } from "react";
import {
	Sidebar,
	CustomerReviews,
	Footer,
	Hero,
	PopularProducts,
	Services,
	SpecialOffer,
	Subscribe,
	SuperQuality,
} from "./sections";
import { Fade, Slide, Reveal, Bounce } from "react-awesome-reveal";
import "./app.css";

const App = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<main className="relative">
			<Nav isOpen={isOpen} toggle={toggle} />
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Fade direction="in" duration={2000}>
				<section className="xl:padding-l wide:padding-r padding-b">
					<Hero />
				</section>
			</Fade>
			<section className="padding">
				<PopularProducts />
			</section>
			<section className="padding">
				<SuperQuality />
			</section>
			<section className="padding-x py-10">
				<Services />
			</section>
			<section className="padding">
				<SpecialOffer />
			</section>
			<section className="bg-pale-blue padding">
				<CustomerReviews />
			</section>
			<section className="padding-x sm:py-32 py-16 w-full">
				<Subscribe />
			</section>
			<section className=" bg-black padding-x padding-t pb-8">
				<Footer />
			</section>
		</main>
	);
};

export default App;
