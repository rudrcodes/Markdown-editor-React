import "./App.css";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
function App() {
  const [input, setInput] = useState("## Hello cuties😊😳");
  return (
    <div className="App">
      <motion.h1
        style={{ cursor: "pointer", borderRadius: "20px" }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
      >
        MarkDown Editor
      </motion.h1>
      <div className="centre-div">
        <textarea
          value={input}
          className="textArea"
          placeholder="Input field"
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <div className="right-side">
          <ReactMarkdown>{input}</ReactMarkdown>
        </div>
      </div>
      <footer>
        <h2>

        Made with 💗 by <a target='_blank' href="https://rudransh.netlify.app/">Rudransh Aggarwal</a>
        </h2>
      </footer>
    </div>
  );
}

export default App;
