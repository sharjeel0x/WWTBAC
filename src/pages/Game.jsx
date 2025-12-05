import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import QUESTIONS from "../data/questions";
import Button from "../components/ui/Button";

const Game = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [index, setIndex] = useState(0);
  const [qList, setQList] = useState([]);
  const [score, setScore] = useState(0);

  const [selected, setSelected] = useState(null);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    if (!state) {
      alert("Missing game settings.");
      navigate("/select");
      return;
    }

    const { difficulty, languages } = state;

    const merged = languages.flatMap((lang) => {
      return QUESTIONS[difficulty][lang.toLowerCase()];
    });

    setQList(merged);
    setCurrentQuestion(merged[0]);
  }, [state]);

  if (!state || !currentQuestion) return null;

  const { difficulty, languages } = state;

  const ansChecker = (option) => {
    if (isLocked) return;
    setSelected(option);
    setIsLocked(true);

    if (option === currentQuestion.correct) {
      setScore(score + 1);
    } 
    
    //  else {
    //   setTimeout(() => {
    //     navigate("/score", { state: { score, total: qList.length } });
    //   }, 800);
    // }
  };
  const bgChanger = (option) => {
    if (!isLocked) return "bg-black";

    if (option === selected && option === currentQuestion.correct)
      return "bg-[#2ffa070e]";

    if (option === selected && option !== currentQuestion.correct)
      return "bg-[#fa07070e]";

    if (option === currentQuestion.correct) return "bg-[#2ffa070e]";

    return "bg-black";
  };

  const nextQuestion = () => {
    if (index + 1 < qList.length) {
      setIndex(index + 1);
      setCurrentQuestion(qList[index + 1]);

      setSelected(null);
      setIsLocked(false);
    } else {
      navigate("/score", {
        state: {
          score,
          total: qList.length,
        },
      });
    }
  };

return (
  <div className="relative flex flex-col justify-around items-center h-screen text-green-300 font-mono tracking-wider overflow-hidden bg-black">

    {/* ambient layers */}
    <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0f0d] to-black" />
    <div className="absolute inset-0 opacity-[0.04] bg-[url('/textures/noise.png')]" />
    <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,100,0.1)_3px)] opacity-10 pointer-events-none" />

    <div className="relative z-10 text-center">

      {/* top info panel */}
      <div className="border border-green-600/40 bg-black/50 p-6 rounded-xl shadow-[0_0_15px_rgba(0,255,140,0.2)] backdrop-blur-md">
        <p className="mb-2 text-sm opacity-80">
          Difficulty:{" "}
          <span className="font-extrabold text-green-400">{difficulty.toUpperCase()}</span>
        </p>

        <p className="mb-6 text-sm opacity-80">
          Languages:{" "}
          <span className="font-extrabold text-green-400">
            {languages.join(", ")}
          </span>
        </p>

        <h1 className="mb-2 text-lg font-bold">Score: {score}</h1>

        <p className="text-sm tracking-widest">
          Question: {index + 1} / {qList.length}
        </p>
      </div>

      {/* question block */}
      <div className="flex flex-col items-center mt-16">
        <h1 className="text-2xl mb-10 font-extrabold tracking-[0.25em] text-green-400 drop-shadow-[0_0_6px_rgba(0,255,120,0.4)]">
          {currentQuestion.q}
        </h1>

        <div className="flex flex-wrap gap-5 max-w-[500px] justify-center">
          {currentQuestion.options.map((option, i) => (
            <Button
              key={i}
              onClick={() => ansChecker(option)}
              disabled={isLocked}
              className={`
                px-6 py-3 border border-green-500/30 
                hover:border-green-300 hover:bg-green-300/10 
                rounded-lg shadow-[0_0_6px_rgba(0,255,120,0.25)]
                tracking-wider text-sm
                transition-all duration-150 active:scale-95
                ${bgChanger(option)}
              `}
            >
              {option}
            </Button>
          ))}
        </div>

        <Button
          onClick={nextQuestion}
          className="mt-10 px-8 py-3 border border-green-500/30 hover:border-green-300 hover:bg-green-300/10 rounded-lg tracking-widest text-sm shadow-[0_0_6px_rgba(0,255,120,0.25)]"
        >
          NEXT →
        </Button>
      </div>

      <Button
        onClick={() => navigate("/select")}
        className="mt-14 px-6 py-2 border border-red-500/30 hover:border-red-300 hover:bg-red-300/10 rounded-lg tracking-widest text-sm shadow-[0_0_6px_rgba(255,0,0,0.25)]"
      >
        BACK
      </Button>
    </div>
  </div>
);

};

export default Game;
