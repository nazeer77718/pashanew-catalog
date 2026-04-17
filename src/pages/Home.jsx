import CategoryGrid from '../components/CategoryGrid';
import categories from '../data/data';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat h-[420px] sm:h-[520px]"
        style={{ backgroundImage: "url('/images/download%20(1).jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </section>
      <CategoryGrid categories={categories} />
    </div>
  );
};

export default Home;