import ProductCard from "./ProductCard";

export default function ProductSection() {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-gray-200 text-gray-900 px-6 md:px-12 lg:px-24">
      <h2 className="text-5xl font-extrabold text-gray-800 text-center mb-12">
        Explore Our Products
      </h2>
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
