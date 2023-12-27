import Popular from '../components/Popular';
import Vegan from '../components/Vegan';
import { motion } from 'framer-motion';

import React from "react";

function Home() {
  return (
    <motion.div>
      <Vegan />
      <Popular />
    </motion.div>
  );
}

export default Home