import { services } from "../constants";
import { ServiceCard } from "../components";
import { Slide } from "react-awesome-reveal";

const Services = () => {
	return (
		<section className="max-container flex justify-center flex-wrap gap-9">
			<Slide direction="left">
				{services.map((service) => (
					<ServiceCard key={service.label} {...service} />
				))}
			</Slide>
		</section>
	);
};

export default Services;
