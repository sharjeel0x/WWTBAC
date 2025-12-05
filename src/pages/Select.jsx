import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Langs from "../components/Langs";
import Button from "../components/ui/Button";

const Select = () => {
  const [difficulty, setDifficulty] = useState(""); 
  const [selectedLang, setSelectedLang] = useState([]); 
  const navigate = useNavigate();

  const handleLangSelect = (lang) => {
    setSelectedLang((prev) =>
      prev.includes(lang)
        ? prev.filter((l) => l !== lang) 
        : [...prev, lang] 
    );
  };

  const handlePlay = () => {
  if (!difficulty) return alert("Select a difficulty first.");
  if (selectedLang.length === 0) return alert("Select at least one language.");

  navigate("/game", {
    state: { difficulty, languages: selectedLang }
  });
};


  return (
  <div className="relative flex flex-col justify-center items-center h-screen text-green-300 font-mono tracking-wider overflow-hidden bg-black">

    {/* background layers */}
    <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0f0d] to-black" />
    <div className="absolute inset-0 opacity-[0.04] bg-[url('/textures/noise.png')]" />
    <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,100,0.1)_3px)] opacity-10 pointer-events-none" />

    {/* starfield */}
    <div className="absolute inset-0 animate-[starPan_30s_linear_infinite] bg-[url('/textures/stars.png')] opacity-20 pointer-events-none" />

    <div className="relative z-10 flex flex-col items-center text-center">

      {/* Difficulty Selection */}
      <div className="my-9 flex flex-col w-full max-w-md justify-center items-center">
        <h1 className="text-2xl font-extrabold tracking-[0.25em] mb-10 drop-shadow-[0_0_6px_rgba(0,255,120,0.4)]">
          PICK DIFFICULTY
        </h1>

        <Button
          className={`mb-4 px-8 py-3 border rounded-lg shadow-[0_0_6px_rgba(0,255,120,0.25)] uppercase tracking-widest text-sm
            ${difficulty === "easy" ? "border-green-400" : "border-green-600/30"}
            hover:border-green-300 hover:bg-green-300/10`}
          onClick={() => setDifficulty("easy")}
        >
          EASY
        </Button>

        <Button
          className={`mb-4 px-8 py-3 border rounded-lg shadow-[0_0_6px_rgba(0,255,120,0.25)] uppercase tracking-widest text-sm
            ${difficulty === "normal" ? "border-green-400" : "border-green-600/30"}
            hover:border-green-300 hover:bg-green-300/10`}
          onClick={() => setDifficulty("normal")}
        >
          NORMAL
        </Button>

        <Button
          className={`mb-4 px-8 py-3 border rounded-lg shadow-[0_0_6px_rgba(0,255,120,0.25)] uppercase tracking-widest text-sm
            ${difficulty === "hard" ? "border-green-400" : "border-green-600/30"}
            hover:border-green-300 hover:bg-green-300/10`}
          onClick={() => setDifficulty("hard")}
        >
          HARD
        </Button>
      </div>

      {/* Language Selection */}
      <h1 className="text-2xl font-extrabold tracking-[0.25em] mb-6 drop-shadow-[0_0_6px_rgba(0,255,120,0.4)]">
        SELECT LANGUAGES
      </h1>

      <Langs selectedLang={selectedLang} onSelect={handleLangSelect} />

      {/* Play Button */}
      <Button
        className="mt-10 px-10 py-3 border border-green-500/30 hover:border-green-300 hover:bg-green-300/10 rounded-lg tracking-widest text-sm shadow-[0_0_6px_rgba(0,255,120,0.25)] transition-all duration-150"
        onClick={handlePlay}
      >
        PLAY
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

export default Select;
