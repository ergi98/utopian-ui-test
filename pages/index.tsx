import Head from "next/head";

// Components
import Nav from "../components/Nav";
import HeroImage from "../components/HeroImage";
import HeroContent from "../components/HeroContent";

export default function Home() {
	return (
		<div className=" font-Inter">
			<Head>
				<title>TNT</title>
				<meta
					name="description"
					content="We are creative agency. We build digital work that you will love!"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="h-full">
				<div className="px-4 lg:pl-8 lg:pr-0  lg:sticky lg:top-0">
					<Nav />
				</div>
				<div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12">
					<div className="px-4 lg:pl-8 lg:pr-0">
						<HeroContent />
					</div>
					<div className="lg:relative">
						<HeroImage />
					</div>
				</div>
			</main>
		</div>
	);
}
