import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Cpu, Boxes } from 'lucide-react';

const TechCells = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cells = [
    {
      id: 1,
      title: 'Web Master',
      description: 'Master the art of web development with cutting-edge technologies and modern design principles.',
      icon: <Code className="w-12 h-12" />,
      color: 'from-blue-500 to-cyan-400',
      shadowColor: 'shadow-blue-500/20'
    },
    {
      id: 2,
      title: 'AI/ML Cell',
      description: 'Dive into the world of artificial intelligence and machine learning through hands-on projects.',
      icon: <Brain className="w-12 h-12" />,
      color: 'from-purple-500 to-pink-500',
      shadowColor: 'shadow-purple-500/20'
    },
    {
      id: 3,
      title: 'CAD Cell',
      description: 'Explore computer-aided design and bring your creative ideas to life with precision.',
      icon: <Boxes className="w-12 h-12" />,
      color: 'from-orange-500 to-red-500',
      shadowColor: 'shadow-orange-500/20'
    },
    {
      id: 4,
      title: 'Coding Cell',
      description: 'Join our vibrant coding community and unlock your programming potential through collaboration.',
      icon: <Cpu className="w-12 h-12" />,
      color: 'from-green-500 to-emerald-500',
      shadowColor: 'shadow-green-500/20'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-8 flex items-center justify">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
        >
          Our <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Cells.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-center text-lg mb-12 max-w-2xl mx-auto"
        >
          Dive into specialized excellence with our diverse cells, each offering a unique avenue for your passion and growth.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cells.map((cell, index) => (
            <motion.div
              key={cell.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              onHoverStart={() => setHoveredCard(cell.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group"
            >
              <div className={`
                relative z-10 h-[300px] p-6 rounded-2xl
                bg-gray-800 backdrop-blur-xl
                border border-gray-700
                transform transition-all duration-300
                group-hover:-translate-y-2
                ${hoveredCard === cell.id ? `shadow-xl ${cell.shadowColor}` : ''}
              `}>
                <div className={`
                  w-16 h-16 rounded-full mb-6
                  flex items-center justify-center
                  bg-gradient-to-r ${cell.color}
                  transform transition-transform duration-300
                  group-hover:scale-110
                `}>
                  {cell.icon}
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {cell.title}
                </h3>

                <p className="text-gray-400">
                  {cell.description}
                </p>

                <div className={`
                  absolute bottom-0 left-0 right-0
                  h-1 rounded-b-2xl
                  bg-gradient-to-r ${cell.color}
                  transform origin-left transition-transform duration-300
                  scale-x-0 group-hover:scale-x-100
                `} />
              </div>

              {/* Background gradient blur effect */}
              <div className={`
                absolute inset-0 -z-10
                bg-gradient-to-r ${cell.color}
                blur-2xl opacity-0
                transition-opacity duration-300
                group-hover:opacity-5
              `} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechCells;