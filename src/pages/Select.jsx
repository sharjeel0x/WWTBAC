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
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="difficulty my-9 flex flex-col">
        <h1 className="text-white text-center font-extrabold tracking-widest my-10">
          Pick Difficulty
        </h1>

        <Button
          className={`bg-[#2ffa070e] text-white hover:bg-[#30fa070a] ${
            difficulty === "easy" ? "border border-white" : ""
          }`}
          onClick={() => setDifficulty("easy")}
        >
          EASY
        </Button>
        <Button
          className={`bg-[#faea070e] text-white hover:bg-[#eafa070a] ${
            difficulty === "normal" ? "border border-white" : ""
          }`}
          onClick={() => setDifficulty("normal")}
        >
          NORMAL
        </Button>
        <Button
          className={`bg-[#fa07070e] text-white hover:bg-[#fa07070a] ${
            difficulty === "hard" ? "border border-white" : ""
          }`}
          onClick={() => setDifficulty("hard")}
        >
          HARD
        </Button>
      </div>

      <h1 className="text-white mb-10 text-center font-extrabold tracking-widest">
        Select Languages
      </h1>

      <Langs selectedLang={selectedLang} onSelect={handleLangSelect} />

      <Button className="my-10" onClick={handlePlay}>
        PLAY
      </Button>
    </div>
  );
};

export default Select;
