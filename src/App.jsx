import { useState } from "react";
import Frontpage from "./components/Frontpage";
import GenerateText from "./function/generateText";

function App() {
  const [answers, setAnswers] = useState({});
  const [currentPage , setCurrentPage] = useState('welcome')

  return (
    <>
    
      <Frontpage setAnswers={setAnswers} />
      <GenerateText answers={answers} />
    </>
  );
}

export default App;
