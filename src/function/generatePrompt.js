export function generatePrompt(answers) {
  if (!answers || Object.keys(answers).length === 0) {
    return null;
  }

  const lengthMap = {
    long: "The message should be detailed, including a background of the situation, acknowledgment of the mistake, its impact, and steps for reconciliation.",
    medium: "The message should be concise yet sufficiently detailed to explain the situation, show remorse, and offer to make things right.",
    short: "The message should be brief, directly addressing the mistake and expressing an apology.",
  };

  const toneMap = {
    formal: "Use a formal, professional tone. Avoid contractions and keep the language respectful and businesslike.",
    informal: "Use an informal, relaxed tone. It's okay to use contractions or casual expressions.",
    friendly: "Use a friendly and kind tone that feels warm and approachable.",
  };

  const relationshipMap = {
    teacher: "You're writing to a teacher, so be respectful and humble in your language.",
    principal: "You're writing to a school principal. Keep it formal, respectful, and sincere.",
    girlfriend: "You're writing to your girlfriend. Use emotionally honest language, and show vulnerability.",
    friends: "You're writing to a friend. Be casual and sincere; express your desire to make things right.",
    boss: "You're writing to your boss. Keep it professional, acknowledge responsibility, and offer constructive follow-up.",
    colleague: "You're writing to a colleague. Be polite, cooperative, and show commitment to a positive relationship.",
  };

  const relationship = relationshipMap[answers.relationship?.toLowerCase()] || "";
  const tone = toneMap[answers.tone?.toLowerCase()] || "";
  const length = lengthMap[answers.length?.toLowerCase()] || "";

  const reason = answers.reason
    ? `The apology is for: ${answers.reason.trim()}.`
    : "";

  const senderName = answers.person?.trim();
  const recipientName = answers.toWhom?.trim();

  const recipientInstruction = recipientName
    ? `Address the letter to "${recipientName}".`
    : "Use an appropriate title or greeting for the recipient.";

  const senderInstruction = senderName
    ? `Sign the letter as "${senderName}".`
    : "Use a natural closing with your name at the end.";

  const prompt = `
Please write a heartfelt apology letter.
${reason}
${length}
${tone}
${relationship}
${recipientInstruction}
${senderInstruction}

Structure the letter with:
- A polite greeting addressing the recipient by name or title.
- An honest explanation of what happened and why you're apologizing.
- A sincere expression of remorse and understanding of the consequences.
- A statement of what you’ll do to make things better or avoid repeating the mistake.
- A warm closing message with your name.

Make sure the message feels genuine, human, and emotionally appropriate.
  `.trim();

  return prompt;
}
