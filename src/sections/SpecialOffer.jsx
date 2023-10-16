import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";
import { Fade, Slide, Reveal, Bounce } from "react-awesome-reveal";

const SpecialOffer = () => {
	return (
		<Reveal>
			<section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
				<div className="flex-1">
					<img
						src={offer}
						alt="Shoe Promotion"
						width={773}
						height={687}
						className="object-contain w-full"
					/>
				</div>
				<div className="flex flex-1 flex-col">
					<h2 className="text-4xl font-palanquin font-bold">
						<span className="text-coral-red">Special </span>
						Offer
					</h2>
					<p className="mt-4 info-text">
						Embark on a Shopping Adventure That Redefines Your Experience with
						Unbeatable Deals. From Premium Selections to Unrivaled Savings, We
						Deliver Exceptional Value That Distinguishes Us.
					</p>
					<p className="mt-6 info-text">
						Explore a World of Possibilities Crafted to Fulfill Your Unique
						Desires, Exceeding the Highest Expectations. Your Journey with Us is
						Nothing Less than Extraordinary.
					</p>
					<div className="mt-11 flex flex-wrap gap-4">
						<Button label="Shop now" iconURL={arrowRight} />
						<Button
							label="Learn more"
							backgroundColor="bg-white"
							borderColor="border-slate-gray"
							textColor="text-slate-gray"
						/>
					</div>
				</div>
			</section>
		</Reveal>
	);
};

export default SpecialOffer;
