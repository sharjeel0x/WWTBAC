import { motion } from "framer-motion";

const LangButton = ({ onClick, children, className = "", icon, selected = false }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`
        w-60 px-6 py-2 mb-5 h-10 rounded-4xl font-bold text-white
        ${selected ? " text-black border border-white" : "bg-black border border-[#2A2A2A] hover:bg-[#0a0a0a]"}
        tracking-widest cursor-pointer flex overflow-hidden justify-center items-center
        ${className}
      `}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative w-full flex justify-center items-center">
        <img
          className="h-10 absolute left-0 -ml-6"
          src={icon}
          alt={`${children}-logo`}
        />
        <span>{children}</span>
      </div>
    </motion.button>
  );
};

export default LangButton;
