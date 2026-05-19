import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.25 }}
          onClick={scrollToTop}
          className="
            fixed
            bottom-6
            right-6
            z-50
            flex
            items-center
            justify-center
            w-12
            h-12
            rounded-full
            border
            border-white/10
            bg-[#0f172a]/80
            backdrop-blur-xl
            shadow-lg
            shadow-black/30
            hover:scale-110
            hover:border-white/20
            transition-all
            duration-300
          "
        >
          <ChevronUp className="w-5 h-5 text-white/80" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}