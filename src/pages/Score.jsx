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
    <div className="flex flex-col justify-center items-center h-screen text-white">
      <h1 className="text-2xl tracking-widest">
        Final Score:{" "}
        <Button className="ml-2">
          {score} / {total}
        </Button>
      </h1>

      <Button onClick={() => navigate("/select")} className="mt-20">
        Play Again
      </Button>
    </div>
  );
};

export default Score;
