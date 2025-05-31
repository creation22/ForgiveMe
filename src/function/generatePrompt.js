export function generatePrompt(answers) {
  if (!answers || Object.keys(answers).length === 0) {
    return null;
  }

  const lengthMap = {
    long: "Write a detailed and thorough message.",
    medium: "Write a clear and concise message.",
    short: "Write a brief message.",
  };

  const toneMap = {
    formal: "Use a formal and polite tone.",
    informal: "Use a casual and friendly tone.",
    friendly: "Use a warm and approachable tone.",
  };

  const relationshipMap = {
    teacher: "Addressing a teacher respectfully.",
    principal: "Addressing the principal with professionalism.",
    girlfriend: "Addressing your girlfriend with affection.",
    friends: "Addressing friends casually.",
    boss: "Addressing your boss professionally.",
    colleague: "Addressing a colleague politely.",
  };

  const relationship = relationshipMap[answers.relationship?.toLowerCase()] || "";
  const tone = toneMap[answers.tone?.toLowerCase()] || "";
  const length = lengthMap[answers.length?.toLowerCase()] || "";

  const prompt = `Please generate an apology letter. ${length} ${tone} ${relationship}`.trim();

  return prompt;
}
