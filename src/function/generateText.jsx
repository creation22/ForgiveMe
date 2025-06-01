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
        if (!response.ok) throw new Error("Failed to generate apology letter");
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

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">
            Crafting your thoughtful apology...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-600 dark:text-red-400">
        <p>We couldn't generate your apology letter: {error}</p>
        <p className="text-sm mt-2">Please try again or adjust your inputs.</p>
      </div>
    );
  }

  return (
    <div className="whitespace-pre-wrap font-serif text-lg leading-relaxed">
      {generatedText}
    </div>
  );
};

export default GenerateText;