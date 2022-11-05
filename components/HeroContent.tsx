import React from "react";

// Assets
import Web from "../assets/Web.svg";
import Design from "../assets/Design.svg";
import Planning from "../assets/Planning.svg";
import ArrowRightRed from "../assets/ArrowRightRed.svg";
import ArrowRightBlue from "../assets/ArrowRightBlue.svg";
import ArrowRightGreen from "../assets/ArrowRightGreen.svg";

// Components
import Card from "./Card";
import ExploreButton from "./ExploreButton";

const CARDS = [
	{
		icon: <Design />,
		title: "Web Design Project",
		description:
			"Sed ut perspiciatis unde omni iste natus error sit volunteer accusantum doloremque.",
		accent: "#DF0D25",
		buttonIcon: <ArrowRightRed />,
	},
	{
		icon: <Planning />,
		title: "Digital Artwork",
		description: "Sed ut perspiciatis unde omni iste natus error sit volunte.",
		accent: "#0071D8",
		buttonIcon: <ArrowRightBlue />,
	},
	{
		icon: <Web />,
		title: "Website Development",
		description:
			"Sed ut perspiciatis unde omni iste natus error sit volunteer accusantum doloremque. Ut perspiciatis unde omni iste natus error sit volunteer accusantum doloremque.",
		accent: "#00D879",
		buttonIcon: <ArrowRightGreen />,
	},
];

const HeroContent = () => {
	return (
		<section className="lg:px-12 lg:border-l-2 lg:pt-56">
			<div className="pb-24">
				<div className="pb-12 lg:pb-20 xl:pb-24">
					<h6 className="text-[#9E9E9E] text-sm pb-1 font-extrabold md:text-base lg:text-lg 2xl:text-xl">
						HELLO WORLD!
					</h6>
					<h1 className="text-2xl font-extrabold md:text-3xl lg:text-4xl 2xl:text-6xl">
						We are creative agency. <br /> We build digital work that you will
						love!
					</h1>
				</div>
				<ExploreButton />
			</div>
			<div className="flex flex-col gap-4 md:flex-row md:gap-1 md:items-end md:flex-wrap 2xl:grid 2xl:grid-cols-3">
				{CARDS.map((card, index) => (
					<div className="flex-grow 2xl:flex-auto md:w-64 2xl:w-auto" key={index}>
						<Card data={card} />
					</div>
				))}
			</div>
		</section>
	);
};

export default HeroContent;
