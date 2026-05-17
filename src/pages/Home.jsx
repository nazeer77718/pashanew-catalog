import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { categories } from '../data/categories';

const Home = () => (
  <div className="min-h-screen">
    <Hero />
    <CategoryGrid categories={categories} />
    <About />
    <Contact />
    <Footer />
  </div>
);

export default Home;

