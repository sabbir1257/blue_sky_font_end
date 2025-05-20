export default function ProductCard({ title, color, description }:any) {
    const colorClasses = {
      blue: "bg-blue-500 hover:bg-blue-600",
      green: "bg-green-500 hover:bg-green-600",
      purple: "bg-purple-500 hover:bg-purple-600",
    };
  
    return (
      <div className="bg-white shadow-lg rounded-xl p-6 transform transition-all hover:scale-105 hover:shadow-2xl">
        <h3 className={`text-2xl font-semibold text-${color}-500 mb-2`}>{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    );
  }
  