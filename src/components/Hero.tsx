import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import imgHero from "../assets/images/img-hero.png";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content - Lado Esquerdo */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-title font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Wines for{" "}
              <span className="text-white bg-primary-700 px-2">The World</span>
              <br />
              Wines for{" "}
              <span className="text-white bg-primary-700 px-2">You</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-primary-600 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Our wines are the breath of youth that will despise pleasure to be
              happy with life and well-being. With our best spices and well
              matured to bring freshness and fluidity to your mouth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.a
                href="#about"
                className="btn-primary inline-flex items-center space-x-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Read more</span>
                <FiChevronDown className="group-hover:animate-bounce" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image - Lado Direito */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="relative">
              {/* Wine Image - AUMENTADA */}
              <motion.div
                className="relative"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={imgHero}
                  alt="Premium Wine Collection"
                  className="w-96 h-[500px] object-contain rounded-3xl shadow-2xl filter-drop-shadow"
                />
              </motion.div>

              {/* Social Links Overlay */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-primary-700 rounded-full px-8 py-4 shadow-xl">
                <div className="text-center">
                  <h3 className="text-xl font-title text-white mb-3">
                    Follow Us
                  </h3>
                  <div className="flex justify-center space-x-6">
                    <motion.a
                      href="#"
                      className="p-3 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors"
                      whileHover={{ scale: 1.15, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Instagram"
                    >
                      <FaInstagram className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="p-3 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors"
                      whileHover={{ scale: 1.15, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Twitter"
                    >
                      <FaTwitter className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
