export function generatePrompt(answers) {
  if (!answers || Object.keys(answers).length === 0) {
    return null;
  }

  // Enhanced mapping with more detailed instructions
  const lengthMap = {
    long: `Compose a comprehensive apology that includes:
           - Detailed background context of the situation
           - Specific acknowledgment of your mistake(s)
           - Clear understanding of the impact caused
           - Multiple steps you'll take for reconciliation
           - Future prevention measures
           Minimum 3 paragraphs.`,
    medium: `Write a balanced apology containing:
             - Brief context of what happened
             - Clear acknowledgment of your mistake
             - Recognition of the impact
             - One concrete way you'll make amends
             - Promise for future improvement
             2-3 paragraphs.`,
    short: `Create a concise apology focusing on:
            - Direct acknowledgment of the mistake
            - Brief expression of regret
            - Simple offer to make things right
            Keep it to 1-2 short paragraphs.`,
  };

  const toneMap = {
    formal: `Use professional language with:
             - Complete sentences (no contractions)
             - Respectful vocabulary
             - Business-appropriate phrasing
             - Measured emotional expression`,
    informal: `Use conversational language with:
               - Natural contractions (I'm, you're)
               - Casual but sincere expressions
               - Personal pronouns
               - Moderate emotional expression`,
    friendly: `Use warm, approachable language with:
               - Positive phrasing
               - Empathetic expressions
               - Reassuring tone
               - Appropriate humor if suitable for context`,
  };

const relationshipMap = {
  teacher: `Maintain student-teacher respect while showing:
            - Academic humility
            - Commitment to improvement
            - Understanding of classroom expectations
            Avoid overly casual language.`,
  principal: `Use formal school-appropriate language showing:
              - Respect for authority
              - Serious understanding of consequences
              - Willingness to follow school policies
              - Mature acceptance of responsibility`,
  girlfriend: `Express emotional sincerity with:
               - Personal vulnerability
               - Romantic consideration
               - Future commitment
               - Appropriate affection
               Balance honesty with sensitivity.`,
  boyfriend: `Show genuine emotion with:
              - Honest vulnerability
              - Thoughtful consideration
              - Commitment to growth
              - Respectful affection
              Keep tone heartfelt but balanced.`,
  friends: `Keep it authentic and personal with:
            - Shared experience references
            - Inside jokes if appropriate
            - Casual but meaningful language
            - Clear desire to preserve friendship`,
  boss: `Maintain professionalism while showing:
          - Work-appropriate remorse
          - Understanding of workplace impact
          - Concrete improvement plan
          - Respect for hierarchy
          Avoid emotional oversharing.`,
  colleague: `Use cooperative language emphasizing:
              - Teamwork values
              - Professional respect
              - Willingness to rebuild trust
              - Workplace-appropriate solutions`,
};


  const englishLevelMap = {
    normal: `Use natural, everyday English with correct grammar but allow for:
             - Common colloquialisms
             - Simple sentence structures
             - Normal conversational flow`,
    polished: `Use refined English with:
               - Sophisticated vocabulary
               - Varied sentence structures
               - Rhetorical devices where appropriate
               - Flawless grammar and syntax`,
  };

  // Enhanced parameter handling
  const relationship = relationshipMap[answers.relationship?.toLowerCase()] || "";
  const tone = toneMap[answers.tone?.toLowerCase()] || "";
  const length = lengthMap[answers.length?.toLowerCase()] || "";
  const english = englishLevelMap[answers.englishlevel?.toLowerCase()] || "polished";
  
  const context = answers.context?.trim() 
    ? `Specific context to address: "${answers.context.trim()}"` 
    : "Address the situation generally but meaningfully";

  const senderName = answers.person?.trim();
  const recipientName = answers.toWhom?.trim();

  const recipientInstruction = recipientName
    ? `Address the recipient personally as "${recipientName}" in the greeting.`
    : "Use an appropriate generic greeting for the relationship type.";

  const senderInstruction = senderName
    ? `Sign the message formally as "${senderName}".`
    : "Conclude with an appropriate signature based on the relationship.";

  // Structured prompt with clear sections
  const prompt = `
**Compose a tailored apology letter** following these precise guidelines:

1. **Core Requirements**:
   - ${context}
   - ${length}
   - ${tone}
   - ${relationship}
   - ${english} language standard

2. **Structural Elements**:
   - ${recipientInstruction}
   - Opening: Appropriate greeting establishing the relationship
   - Body: 
     * Clear context setting
     * Specific acknowledgment of wrongdoing
     * Empathetic understanding of impact
     * Concrete reparative actions
   - Closing: 
     * ${senderInstruction}
     * Forward-looking positive note

3. **Style Guidelines**:
   - Maintain consistent ${tone.toLowerCase()} throughout
   - Vary sentence structure for ${english.toLowerCase()} fluency
   - Include relationship-appropriate emotional cues
   - Balance accountability with constructive outlook

4. **Prohibitions**:
   - No generic platitudes
   - No excessive self-pity
   - No blaming language
   - No unrealistic promises

5. **Special Considerations**:
   - If apologizing to multiple people, address group dynamics
   - For serious offenses, emphasize changed behavior
   - For minor issues, keep proportionate seriousness

The output should feel authentic, situation-appropriate, and effectively repair the relationship according to the specified parameters.
  `.trim();

  return prompt;
}