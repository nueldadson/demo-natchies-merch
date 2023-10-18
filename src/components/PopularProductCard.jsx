import { Fade } from "react-awesome-reveal";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price, oldprice }) => {
	return (
		<>
			<div className="flex flex-1 flex-col w-full max-sm:w-full border-l border-r border-ash p-2 md:p-8">
				<Fade direction="in" duration={1000}>
					<img src={imgURL} alt={name} className="w-[230px] mx-auto " />
				</Fade>
				<div className="mt-4 flex justify-end gap-2.5">
					<p className="font-montserrat text-sm font-bold leading-normal text-slate-gray">
						(4.5)
					</p>
					<img src={star} alt="rating icon" width={13} />
				</div>
				<h3 className="mt-2 text-lg leading-normal font-semibold font-palanquin">
					{name}
				</h3>
				<p className="mt-2 font-semibold line-through font-montserrat text-gray-500 text-sm leading-normal">
					{oldprice}
				</p>
				<p className="mt-2 font-semibold font-montserrat text-coral-red text-lg leading-normal">
					{price}
				</p>
			</div>
		</>
	);
};

export default PopularProductCard;
