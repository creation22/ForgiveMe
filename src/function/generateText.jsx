import React, { useState, useEffect } from "react";
import { generatePrompt } from "./generatePrompt";

const GenerateText = ({ answers }) => {
  const [promptData, setPromptData] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!answers || Object.keys(answers).length === 0) {
      setPromptData("");
      setGeneratedText("");
      return;
    }
    const prompt = generatePrompt(answers);
    setPromptData(prompt);
  }, [answers]);

  useEffect(() => {
    if (!promptData) return;

    const fetchGeneratedText = async () => {
      setLoading(true);
      setError(null);
      try {
        const encodedPrompt = encodeURIComponent(promptData);
        const url = `https://text.pollinations.ai/${encodedPrompt}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch");
        const text = await response.text();
        setGeneratedText(text);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGeneratedText();
  }, [promptData]);

  return (
    <div>
      {loading && <p>Loading generated text...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading && !error && <p>{generatedText}</p>}
    </div>
  );
};

export default GenerateText;
