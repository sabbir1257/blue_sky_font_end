import Link from 'next/link';
import { Project } from '../../../../public/datas/flatProject/projects';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative rounded-2xl overflow-hidden shadow-lg transition group"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={500}
        height={500}
        className="w-full h-[420px] object-cover"
      />

      <div className="p-4 bg-white">
        <h2 className="text-xl font-semibold">{project.title}</h2>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-60 text-white p-4 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="mb-4">{project.description}</p>
        <Link href={`/flatProject/${project.id}`}>
          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg">
            Explore
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
