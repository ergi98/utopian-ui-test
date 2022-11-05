import React from "react";

interface CardData {
	title: string;
	accent: string;
	description: string;
	icon: React.ReactNode;
	buttonIcon: React.ReactNode;
}

const Card: React.FC<{
	data: CardData;
}> = ({ data: { title, accent, description, icon, buttonIcon } }) => {
	return (
		<article
			className="border-t-4 px-6 py-12 bg-[#FBFBFB] hover:bg-[#f4f4f4] transition-all"
			style={{ borderColor: accent }}
		>
			<div className="pb-4">{icon}</div>
			<h3 className="pb-3 text-lg md:text-xl lg:text-2xl font-extrabold">
				{title}
			</h3>
			<p className="text-[#5E5E5E] pb-9">{description}</p>
			<div className="text-right">
				<CardButton icon={buttonIcon} />
			</div>
		</article>
	);
};

const CardButton: React.FC<{
	icon: React.ReactNode;
}> = ({ icon }) => {
	return (
		<button className="hover:scale-110 focus:outline-[#FF9700] rounded-full focus:outline-offset-2 transition-all">
			{icon}
		</button>
	);
};

export default Card;
