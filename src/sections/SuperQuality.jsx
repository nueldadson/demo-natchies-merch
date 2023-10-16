import { shoe8 } from "../assets/images";
import { Button } from "../components";
import { Fade, Slide, Reveal, Bounce } from "react-awesome-reveal";

const SuperQuality = () => {
	return (
		<section
			id="about-us"
			className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
		>
			<Fade direction="in" duration={1000}>
				<div className="flex flex-1 flex-col">
					<h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
						Delivering Exceptional
						<span className="text-coral-red"> Quality </span>
						<span className="text-coral-red">Footwear </span>
					</h2>
					<p className="mt-4 lg:max-w-lg info-text">
						Crafting Elevated Comfort and Style in Every Step. Our Meticulous
						Footwear Offers Unparalleled Quality, Innovation, and a Dash of
						Elegance.
					</p>
					<p className="mt-6 lg:max-w-lg info-text">
						Our Commitment to Detail and Excellence Guarantees Your
						Satisfaction.
					</p>
					<div className="mt-11">
						<Button label="View details" />
					</div>
				</div>
			</Fade>
			<Reveal duration={1000}>
				<div className="flex-1 flex justify-center items-center">
					<img
						src={shoe8}
						alt="product detail"
						width={570}
						height={522}
						className="object-contain"
					/>
				</div>
			</Reveal>
		</section>
	);
};

export default SuperQuality;
