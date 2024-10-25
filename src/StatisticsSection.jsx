import CountUp from 'react-countup';
import { motion } from "framer-motion";

const stats = [
  { number: 100, description: 'Colleges covered', suffix: '+' },
  { number: 47, description: 'Years of experience', suffix: '+' },
  { number: 138, description: 'Active Members', suffix: '' },
  { number: 25000, description: 'Students impacted', suffix: '+' },
];

const StatisticsSection = () => {
  return (
    <section className="bg-gray-900 py-12">
     <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
        >
          Our <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent ">Statistics.</span>
        </motion.h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white shadow-md rounded-lg transform transition-transform hover:scale-105"
            >
              <h3 className="text-4xl font-bold text-primary">
                <CountUp end={stat.number} suffix={stat.suffix} duration={3} />
              </h3>
              <p className="text-gray-500 mt-2 text-lg">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
