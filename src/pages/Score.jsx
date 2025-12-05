import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

const Score = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // const score = state?.score;
  // const total = state?.total;
const{score,total} = state

   
  useEffect(() => {
    if (score === undefined || total === undefined) {
      alert("Complete the game to view your score.");
      navigate("/game");
    }
  }, [score, total, navigate]);

  if (score === undefined || total === undefined) return null;

  return (
  <div className="relative flex flex-col justify-center items-center h-screen text-green-300 font-mono tracking-wider overflow-hidden bg-black">

    {/* background layers */}
    <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0f0d] to-black" />
    <div className="absolute inset-0 opacity-[0.04] bg-[url('/textures/noise.png')]" />
    <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,100,0.1)_3px)] opacity-10 pointer-events-none" />

    {/* starfield */}
    <div className="absolute inset-0 animate-[starPan_30s_linear_infinite] bg-[url('/textures/stars.png')] opacity-20 pointer-events-none" />

    <div className="relative z-10 text-center">
      <h1 className="text-2xl tracking-[0.25em] mb-10 drop-shadow-[0_0_6px_rgba(0,255,120,0.4)]">
        FINAL SCORE:{" "}
        <Button
          className="ml-2 px-6 py-2 border border-green-500/30 rounded-lg text-green-300 hover:border-green-300 hover:bg-green-300/10 shadow-[0_0_6px_rgba(0,255,120,0.25)] transition-all duration-150"
        >
          {score} / {total}
        </Button>
      </h1>

      <Button
        onClick={() => navigate("/select")}
        className="mt-20 px-8 py-3 border border-green-500/30 hover:border-green-300 hover:bg-green-300/10 rounded-lg tracking-widest text-sm shadow-[0_0_6px_rgba(0,255,120,0.25)] transition-all duration-150"
      >
        PLAY AGAIN
      </Button>
    </div>

    {/* animations */}
    <style>{`
      @keyframes starPan {
        from { transform: translateY(0); }
        to { transform: translateY(-2000px); }
      }
    `}</style>
  </div>
);

};

export default Score;
