import { useRouter } from 'next/router';
import Image from 'next/image';
import { motion } from 'framer-motion';

const towerData = [
    {
        id: 1,
        name: 'Skyline Tower',
        location: 'Banani, Dhaka',
        floors: 32,
        units: 180,
        description: 'A modern masterpiece featuring luxurious rooftop views, intelligent living systems, and vibrant community zones.',
        image: '/images/tower1.png',
    },
    {
        id: 2,
        name: 'Horizon Heights',
        location: 'Gulshan, Dhaka',
        floors: 28,
        units: 150,
        description: 'Horizon Heights blends comfort and nature. Wake up to lake views and unwind in lush landscaped gardens.',
        image: '/images/tower1.png',
    },
    {
        id: 3,
        name: 'Eco Arc Tower',
        location: 'Bashundhara, Dhaka',
        floors: 25,
        units: 130,
        description: 'Eco Arc is built for sustainability—solar powered, water efficient, and ready for the future.',
        image: '/images/tower1.png',
    },
];

const TowerDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const tower = towerData.find((t) => t.id === Number(id));

    if (!tower) return <p className="text-center py-20">Tower not found</p>;

    return (
        <div className="min-h-screen bg-[#f9fafb]">
            {/* Hero Section */}
            <div className="relative w-full h-[60vh]">
                <Image
                    src={tower.image}
                    fill
                    className="object-cover brightness-75"
                    alt={tower.name}
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
                    <h1 className="text-5xl font-bold drop-shadow-lg">{tower.name}</h1>
                    <p className="text-xl mt-2 drop-shadow-md">{tower.location}</p>
                </div>
            </div>

            {/* Detail Content */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-2 gap-12 items-start"
                >
                    {/* Left Side - Image Card */}
                    <div className="rounded-3xl shadow-xl overflow-hidden">
                        <Image
                            src={tower.image}
                            alt={tower.name}
                            width={600}
                            height={600}
                            className="object-cover w-full h-[60vh]"
                        />
                    </div>

                    {/* Right Side - Text + Gallery */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-4 text-gray-800">About the Tower</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">{tower.description}</p>

                        <div className="grid grid-cols-2 gap-6 mt-10">
                            <div className="p-6 bg-white rounded-2xl shadow-md border-t-4 border-blue-500 text-center">
                                <h3 className="text-xl font-bold text-gray-800">Floors</h3>
                                <p className="text-3xl text-blue-600 mt-2">{tower.floors}</p>
                            </div>
                            <div className="p-6 bg-white rounded-2xl shadow-md border-t-4 border-purple-500 text-center">
                                <h3 className="text-xl font-bold text-gray-800">Units</h3>
                                <p className="text-3xl text-purple-600 mt-2">{tower.units}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Image Gallery */}
                <div className="mt-20">
                    <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Stunning Tower Gallery</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {['/images/tower1.png', '/images/tower1.png', '/images/tower1.png', '/images/tower1.png', '/images/tower1.png'].map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className={`relative group overflow-hidden rounded-xl shadow-xl transition-all duration-300 ${i % 2 === 0 ? 'col-span-1 row-span-2' : 'col-span-1'
                                    }`}
                            >
                                <Image
                                    src={img}
                                    alt={`Gallery image ${i + 1}`}
                                    width={i % 2 === 0 ? 350 : 280} // Varying image sizes
                                    height={i % 2 === 0 ? 550 : 280} // Varying aspect ratios
                                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                                />

                                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                                    <p className="absolute bottom-4 left-4 text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Tower {i + 1}</p>
                                </div>

                            </motion.div>
                        ))}
                    </div>
                </div>




            </div>


            {/* Optional CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 py-12">
                <div className="max-w-5xl mx-auto text-center text-white">
                    <h2 className="text-3xl font-semibold mb-2">Interested in this tower?</h2>
                    <p className="mb-6 text-lg">Contact our team to book a visit or get more information.</p>
                    <button className="bg-white text-blue-700 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition">
                        Get in Touch
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TowerDetailPage;
