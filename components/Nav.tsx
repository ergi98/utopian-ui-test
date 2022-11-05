import Link from "next/link";
import React, { useEffect, useState } from "react";

// Motion
import { motion, AnimatePresence } from "framer-motion";

// Assets
import Menu from "../assets/Menu.svg";
import Logo from "../assets/Logo.svg";
import Close from "../assets/Close.svg";

const LINKS = [
	{ text: "About", url: "#" },
	{ text: "Services", url: "#" },
	{ text: "Portfolio", url: "#" },
	{ text: "Team", url: "#" },
	{ text: "Contact", url: "#" },
];

const Nav = () => {
	return (
		<nav className="md:py-2 bg-white lg:relative">
			<div className="hidden xl:block xl:border-b-2 xl:absolute xl:bottom-4 xl:w-full xl:right-0"></div>
			<ul className="flex justify-between items-center md:justify-start md:items-end xl:w-fit xl:pr-12 xl:z-50 xl:bg-white xl:relative">
				<li className="scale-75 md:scale-100 md:pr-10">
					<Link href="#" className="group focus:outline-none">
						<Logo className="group-hover:fill-[#FF9700] group-focus:fill-[#FF9700] transition-all" />
					</Link>
				</li>
				<div className="hidden md:flex md:gap-12 md:pb-1 text-[#939393]">
					{LINKS.map((link) => (
						<li key={link.text}>
							<Link
								href={link.url}
								className="focus:outline-none focus:border-b focus:border-b-[#FF9700] focus:text-[#FF9700] transition-all hover:border-b hover:border-b-[#FF9700] hover:text-[#FF9700] lg:text-lg"
							>
								{link.text}
							</Link>
						</li>
					))}
				</div>
				<BurgerMenu />
			</ul>
		</nav>
	);
};

const BurgerMenu: React.FC = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<>
			<button onClick={() => setShowMenu(true)} className="h-fit md:hidden">
				<Menu />
			</button>
			<MobileMenu show={showMenu} onClose={() => setShowMenu(false)} />
		</>
	);
};

const MobileMenu: React.FC<{
	show: boolean;
	onClose: () => void;
}> = ({ show, onClose }) => {
	useEffect(() => {
		const handleResize = () => window.innerWidth >= 768 && onClose();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [onClose]);

	return (
		<AnimatePresence>
			{show && (
				<motion.menu
					initial={{ opacity: 0, height: 0 }}
					animate={{ opacity: 1, height: "100vh" }}
					exit={{ opacity: 0, height: 0 }}
					transition={{ duration: 0.3 }}
					className="bg-white w-screen fixed top-0 left-0 z-20"
				>
					<div className="px-4">
						<div className="flex justify-between items-center">
							<div className="scale-75">
								<Link href="#" className="group focus:outline-none">
									<Logo className="group-hover:fill-[#FF9700] group-focus:fill-[#FF9700] transition-all" />
								</Link>
							</div>
							<button onClick={onClose} className="h-fit md:hidden">
								<Close />
							</button>
						</div>
						<ul className="px-4 pt-12">
							{LINKS.map((link) => (
								<li key={link.text} className="mb-4 last:mb-0">
									<Link
										href={link.url}
										className="focus:outline-none focus:border-b focus:border-b-[#FF9700] focus:text-[#FF9700] transition-all hover:border-b hover:border-b-[#FF9700] hover:text-[#FF9700] lg:text-lg"
									>
										{link.text}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</motion.menu>
			)}
		</AnimatePresence>
	);
};

export default Nav;
