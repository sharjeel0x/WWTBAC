import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col justify-center items-center h-screen text-green-300 font-mono tracking-wider overflow-hidden bg-black">

      {/* background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0f0d] to-black" />
      <div className="absolute inset-0 opacity-[0.04] bg-[url('/textures/noise.png')]" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,100,0.1)_3px)] opacity-10 pointer-events-none" />
      <div className="absolute inset-0 animate-[starPan_30s_linear_infinite] bg-[url('/textures/stars.png')] opacity-20 pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-6">
        <Button
          onClick={() => navigate("/select")}
          className="w-60 px-6 py-3 border border-green-500/30 rounded-lg tracking-widest text-sm shadow-[0_0_8px_rgba(0,255,120,0.25)] hover:border-green-300 hover:bg-green-300/10 transition-all duration-150"
        >
          PLAY
        </Button>

        <Button
          className="w-60 px-6 py-3 border border-green-500/30 rounded-lg tracking-widest text-sm shadow-[0_0_8px_rgba(0,255,120,0.25)] hover:border-green-300 hover:bg-green-300/10 transition-all duration-150"
        >
          LEADERBOARD
        </Button>

        <Button
          className="w-60 px-6 py-3 border border-green-500/30 rounded-lg tracking-widest text-sm shadow-[0_0_8px_rgba(0,255,120,0.25)] hover:border-green-300 hover:bg-green-300/10 transition-all duration-150"
        >
          SETTINGS
        </Button>

        <Button
          className="w-60 px-6 py-3 border border-green-500/30 rounded-lg tracking-widest text-sm shadow-[0_0_8px_rgba(0,255,120,0.25)] hover:border-green-300 hover:bg-green-300/10 transition-all duration-150"
        >
          HOW TO PLAY
        </Button>
      </div>

      <style>{`
        @keyframes starPan {
          from { transform: translateY(0); }
          to { transform: translateY(-2000px); }
        }
      `}</style>
    </div>
  );
};

export default Menu;
