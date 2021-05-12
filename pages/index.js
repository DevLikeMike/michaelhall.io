import About from "@/components/homescreen/About";
import Contact from "@/components/homescreen/Contact";
import Footer from "@/components/homescreen/Footer";
import Landing from "@/components/homescreen/Landing";
import Projects from "@/components/homescreen/Projects";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Layout>
  );
}
