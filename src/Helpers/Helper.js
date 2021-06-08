import uniqid from "uniqid";
import Eloisa from "../choraoboard/Eloisa.png";
import Jesus from "../choraoboard/Jesus.png";
import Joao from "../choraoboard/João.png";
import Lino from "../choraoboard/Lino.png";
import Alfonso from "../choraoboard/Alfonso.png";
import Giuliana from "../choraoboard/Giuliana.png";
import Jamily from "../choraoboard/Jamily.png";
import Matheus from "../choraoboard/Matheus.png";
import Miguel from "../choraoboard/Miguel.png";
import Rafael from "../choraoboard/Rafael.png";
import Richard from "../choraoboard/Richard.png";
import Rodrigo from "../choraoboard/Rodrigo.png";
import Benner from "../choraoboard/Benner.png";
import Carlos from "../choraoboard/Carlos.png";
import Cleydyr from "../choraoboard/Cleydyr.png";
import Gustavo from "../choraoboard/Gustavo.png";
import Marcel from "../choraoboard/Marcel.png";
let people = {
  TSEs: [
    { id: uniqid(), name: "Eloisa", score: 0, imgSrc: Eloisa },
    { id: uniqid(), name: "Jesus", score: 0, imgSrc: Jesus },
    { id: uniqid(), name: "João", score: 0, imgSrc: Joao },
    { id: uniqid(), name: "Lino", score: 0, imgSrc: Lino },
  ],
  CSEs: [
    { id: uniqid(), name: "Alfonso", score: 0, imgSrc: Alfonso },
    { id: uniqid(), name: "Giuliana", score: 0, imgSrc: Giuliana },
    { id: uniqid(), name: "Jamily", score: 0, imgSrc: Jamily },
    { id: uniqid(), name: "Matheus", score: 0, imgSrc: Matheus },
    { id: uniqid(), name: "Miguel", score: 0, imgSrc: Miguel },
    { id: uniqid(), name: "Rafael", score: 0, imgSrc: Rafael },
    { id: uniqid(), name: "Richard", score: 0, imgSrc: Richard },
    { id: uniqid(), name: "Rodrigo", score: 0, imgSrc: Rodrigo },
  ],
  LEADERSHIP: [
    { id: uniqid(), name: "Benner", score: 0, imgSrc: Benner },
    { id: uniqid(), name: "Carlos", score: 0, imgSrc: Carlos },
    { id: uniqid(), name: "Cleydyr", score: 0, imgSrc: Cleydyr },
    { id: uniqid(), name: "Gustavo", score: 0, imgSrc: Gustavo },
    { id: uniqid(), name: "Marcel", score: 0, imgSrc: Marcel },
  ],
};

export default people;
