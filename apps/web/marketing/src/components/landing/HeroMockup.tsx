import DesktopMockup from '../screens/DesktopMockup';
import TabletMockup from '../screens/TabletMockup';
import LaptopMockup from '../screens/LaptopMockup';
import MobileMockup from '../screens/MobileMockup';
import { motion } from 'framer-motion';

export default function HeroMockup() {
  return (
    <div className="w-full max-w-4xl mx-auto flex items-center justify-center mt-12 px-[15%] sm:px-[20%] md:px-[25%] lg:px-30 pb-12">
      
      {/* The Desktop is the relative anchor. Everything else orbits it. */}
      <div className="relative w-full z-10">
        <DesktopMockup />
        
        {/* Laptop (Left) */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="absolute left-[-30%] md:left-[-40%] bottom-[-10%] md:bottom-[-15%] w-[75%] md:w-[85%] z-20"
        >
          <LaptopMockup />
        </motion.div>

        {/* Tablet (Right) */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute -right-[15%] md:-right-[20%] bottom-[-5%] w-[35%] md:w-[40%] z-30"
        >
          <TabletMockup />
        </motion.div>
        
        {/* Mobile (Far Right) */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -right-[25%] md:-right-[35%] bottom-[-15%] w-[18%] md:w-[22%] z-40"
        >
          <MobileMockup />
        </motion.div>
      </div>

    </div>
  );
}
