import Header from "@/components/Header/header";
import Experience from "@/components/Experience/experience";
import Project from "@/components/Project/project";
import Footer from "@/components/footer";
import About from "@/components/about";
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
