import { motion } from "framer-motion";

const Button = ({ onClick, children, className = "" }) => {
  // check if user provided custom background
  const hasCustomBg =
    className.includes("bg-") || className.includes("bg[");

  return (
    <motion.button
      onClick={onClick}
      className={`
        w-60 px-6 py-2 mb-5 rounded-4xl font-bold
        ${hasCustomBg ? "" : "text-white bg-black hover:bg-[#0a0a0a]"}
        border border-[#2A2A2A] tracking-widest cursor-pointer
        ${className}
      `}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
