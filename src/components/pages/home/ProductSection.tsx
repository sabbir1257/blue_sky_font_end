import ProductCard from './ProductCard';

export default function ProductSection() {
  return (
    <div className="py-16 px-6">
      <div className="text-center my-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Explore Our Projects
        </h2>
        <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-12">
        <ProductCard
          title="🏡 Land"
          color="blue"
          description="Discover premium plots located in prime areas, perfect for both residential and commercial development. Secure your future with strategic land investments."
        />
        <ProductCard
          title="🏢 Flat"
          color="green"
          description="Experience luxurious living with modern apartments featuring top-tier amenities designed for your comfort and convenience."
        />
        <ProductCard
          title="📈 Share"
          color="purple"
          description="Invest in the stock market with expert insights and guidance. Maximize your financial potential with profitable shares and investment strategies."
        />
      </div>
    </div>
  );
}
