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
    <div className="flex flex-col justify-around items-center h-screen text-white">
      <div>
        <p className="mb-2">
          Difficulty:{" "}
          <span className="font-extrabold">{difficulty.toUpperCase()}</span>
        </p>

        <p className="mb-6">
          Languages:{" "}
          <span className="font-extrabold">{languages.join(", ")}</span>
        </p>

        <h1>Score: {score}</h1>

        <p>
          Question: {index + 1} / {qList.length}
        </p>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-2xl mb-10 font-extrabold tracking-widest">
          Question: {currentQuestion.q}
        </h1>

        <div className="flex flex-wrap gap-5 max-w-[500px]">
          {currentQuestion.options.map((option, i) => (
            <Button
              key={i}
              onClick={() => ansChecker(option)}
              className={bgChanger(option)}
              disabled={isLocked}
            >
              {option}
            </Button>
          ))}
        </div>

        <Button onClick={nextQuestion} className="mt-10">
          Next Question
        </Button>
      </div>

      <Button onClick={() => navigate("/select")}>Back to Selection</Button>
    </div>
  );
};

export default Game;
