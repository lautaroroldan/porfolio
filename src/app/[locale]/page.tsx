import About from "@/components/about";
import Experience from "@/components/Experience/experience";
import Footer from "@/components/footer";
import Header from "@/components/Header/header";
import Project from "@/components/Project/project";
export default function Home() {
	return (
		<main className="min-h-screen p-8 w-full max-w-3xl mx-auto flex flex-col gap-12">
			<Header />
			<About />
			<Experience />
			<Project />
			<Footer />
		</main>
	);
}
