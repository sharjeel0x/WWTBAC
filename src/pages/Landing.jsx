import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <motion.div
        className="flex items-center w-full max-w-xl mx-auto gap-4"
        initial={{ opacity: 0, y: 20, scale: 0.5 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <hr className="flex-1 border border-white opacity-20" />
        <h2 className="text-white font-bold opacity-60 tracking-widest">
          Welcome to
        </h2>
        <hr className="flex-1 border border-white opacity-20" />
      </motion.div>

      <motion.h1
        className="text-white  font-extrabold text-5xl my-10"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
      >
        Who Wants To Be A Coder
      </motion.h1>

      <motion.button
        onClick={() => {
          navigate("/menu");
        }}
        className="
          w-60 px-6 py-2 rounded-4xl font-bold text-white
          bg-black border border-[#2A2A2A] tracking-widest
          hover:bg-[#0a0a0a] cursor-pointer
        "
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
      >
        PLAY
      </motion.button>
    </div>
  );
};

export default Landing;
