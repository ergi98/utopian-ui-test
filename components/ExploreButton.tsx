import React from "react";

// Assets
import Arrow from "../assets/Arrow.svg";

const ExploreButton = () => {
	return (
		<button className="group bg-[#FF9700] outline-offset-2 hover:outline hover:bg-[#e88b00] hover:outline-[#e88b00] focus:outline focus:outline-[#FF9700] text-white px-9 py-6 font-semibold font-SansPro flex gap-3 items-center xl:text-xl">
			<span>Explore our portfolio</span>
			<span className="group-hover:animate-go">
				<Arrow />
			</span>
		</button>
	);
};

export default ExploreButton;
