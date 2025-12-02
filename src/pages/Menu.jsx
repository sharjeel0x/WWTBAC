import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

const Menu = () => {

   const navigate = useNavigate()

   
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <Button onClick={()=>{navigate('/select')}}>PLAY</Button>

      <Button>LEADERBOARD</Button>

      <Button>SETTING</Button>

      <Button>HOW TO PLAY</Button>
    </div>
  );
};

export default Menu;
