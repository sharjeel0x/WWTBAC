import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col justify-center items-center h-screen overflow-hidden font-mono text-green-300 tracking-wider bg-black">

      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0f0d] to-black" />
      <div className="absolute inset-0 opacity-[0.04] bg-[url('/textures/noise.png')]" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,100,0.1)_3px)] opacity-10 pointer-events-none" />
      <div className="absolute inset-0 animate-[starPan_30s_linear_infinite] bg-[url('/textures/stars.png')] opacity-20 pointer-events-none" />

      {/* Header */}
      <motion.div
        className="flex items-center w-full max-w-xl mx-auto gap-4 relative z-10"
        initial={{ opacity: 0, y: 20, scale: 0.5 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <hr className="flex-1 border border-green-500/30 opacity-20" />
        <h2 className="font-bold text-green-400 opacity-70 tracking-widest">
          Welcome to
        </h2>
        <hr className="flex-1 border border-green-500/30 opacity-20" />
      </motion.div>

      {/* Title */}
      <motion.h1
        className="relative z-10 text-5xl font-extrabold my-10 text-green-400 drop-shadow-[0_0_10px_rgba(0,255,120,0.4)] text-center"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
      >
        Who Wants To Be A Coder
      </motion.h1>

      {/* Play Button */}
      <motion.button
        onClick={() => navigate("/menu")}
        className="
          relative z-10 w-60 px-6 py-3 rounded-4xl font-bold text-green-300
          bg-black border border-green-500/30 tracking-widest
          hover:border-green-300 hover:bg-green-300/10 shadow-[0_0_8px_rgba(0,255,120,0.25)]
          transition-all duration-150 cursor-pointer
        "
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
      >
        PLAY
      </motion.button>

      {/* Starfield animation */}
      <style>{`
        @keyframes starPan {
          from { transform: translateY(0); }
          to { transform: translateY(-2000px); }
        }
      `}</style>
    </div>
  );
};

export default Landing;
