import {Route, Routes} from "react-router-dom";
import { TextAnalyzer } from './component/TextAnalyzer';
import { Error } from "./component/Error";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TextAnalyzer/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
  );
};

export default App;
