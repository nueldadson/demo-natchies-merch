import { products } from "../constants";
import { PopularProductCard } from "../components";
import { Fade, Slide, Reveal, Bounce } from "react-awesome-reveal";

const PopularProducts = () => {
	return (
		<Fade direction="in" duration={1500}>
			<section id="products" className="max-container max-sm:mt-12">
				<Slide direction="up">
					<div className="flex flex-col justify-start gap-5">
						<h2 className="text-4xl font-palanquin font-bold">
							Our <span className="text-coral-red"> Popular </span> Products
						</h2>
						<p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
							Experience Unrivaled Quality and Style in Every Selection. Explore
							a Realm of Comfort, Artistry, and Affordability.
						</p>
					</div>
				</Slide>
				<Slide direction="left">
					<div
						className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 sm:gap-4 gap-4
"
					>
						{products.map((product) => (
							<PopularProductCard key={product.name} {...product} />
						))}
					</div>
				</Slide>
			</section>
		</Fade>
	);
};

export default PopularProducts;
