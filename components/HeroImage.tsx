import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";

// Motion
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
	{
		header: "Enjoy the space",
		subheader: "Artwork project",
		imageSrc: "/HeroImage@2x.png",
	},
	{
		header: "Enjoy the space 2",
		subheader: "Artwork project 2",
		imageSrc: "/HeroImage2@2x.jpg",
	},
	{
		header: "Enjoy the space 3",
		subheader: "Artwork project 3",
		imageSrc: "/HeroImage3@2x.jpg",
	},
];

const HeroImage = () => {
	const [activeSlide, setActiveSlide] = useState(0);

	const firstImg = useRef(null);
	const secondImg = useRef(null);
	const thirdImg = useRef(null);

	useEffect(() => {
		const interval = window.setInterval(() => {
			setActiveSlide((prev) => (prev >= SLIDES.length - 1 ? 0 : prev + 1));
		}, 4000);
		return () => {
			interval && clearInterval(interval);
		};
	}, []);

	return (
		<section className="relative h-fit lg:fixed lg:h-[calc(100vh-52px)] xl:-mt-4">
			<div className="relative">
				<Image
					className="max-h-96 lg:h-[calc(100vh-52px)] lg:max-h-[calc(100vh-52px)] object-cover"
					src={SLIDES[activeSlide].imageSrc}
					alt="hero image"
					height={2528}
					width={2022}
				/>
			</div>
			<div className="absolute bottom-0 p-4 w-full md:flex md:justify-between md:items-center xl:px-12 xl:pb-10">
				<SliderContent activeIndex={activeSlide} />
				<Slides activeIndex={activeSlide} onChange={setActiveSlide} />
			</div>
		</section>
	);
};

const Slides: React.FC<{
	activeIndex: number;
	onChange: (a: number) => void;
}> = ({ activeIndex, onChange }) => {
	return (
		<ul className="flex gap-1 md:w-1/2 md:max-w-md">
			{SLIDES.map((slide, index) => (
				<li key={slide.header} className="flex-grow">
					<button
						className={`h-1 xll:h-2 w-full  ${
							index === activeIndex
								? "bg-[#FF9700] hover:bg-[#e88b00]"
								: "bg-white hover:bg-neutral-200"
						}`}
						onClick={() => onChange(index)}
					/>
				</li>
			))}
		</ul>
	);
};

const SliderContent: React.FC<{ activeIndex: number }> = ({ activeIndex }) => {
	const slideData = SLIDES[activeIndex];
	return (
		<motion.div
			key={slideData.header}
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 10 }}
			transition={{ duration: 0.4 }}
		>
			<h5 className="text-[#A4A4A4] text-sm">{slideData.subheader}</h5>
			<h4 className="text-white text-xl">{slideData.header}</h4>
		</motion.div>
	);
};

export default HeroImage;
