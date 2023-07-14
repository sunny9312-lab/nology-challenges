const morseCodeMap = new Map([
    [".-", "A"],
    ["-...", "B"],
    ["-.-.", "C"],
    ["-..", "D"],
    [".", "E"],
    ["..-.", "F"],
    ["--.", "G"],
    ["....", "H"],
    ["..", "I"],
    [".---", "J"],
    ["-.-", "K"],
    [".-..", "L"],
    ["--", "M"],
    ["-.", "N"],
    ["---", "O"],
    [".--.", "P"],
    ["--.-", "Q"],
    [".-.", "R"],
    ["...", "S"],
    ["-", "T"],
    ["..-", "U"],
    ["...-", "V"],
    [".--", "W"],
    ["-..-", "X"],
    ["-.--", "Y"],
    ["--..", "Z"],
    ["/", " "]
  ]);
  
  const translateToMorse = (text) => {
    const sanitizedText = text.toUpperCase();
    let morseTranslation = "";
  
    for (let i = 0; i < sanitizedText.length; i++) {
      const char = sanitizedText[i];
      const morseChar = morseCodeMap.get(char);
  
      if (morseChar) {
        morseTranslation += morseChar + " ";
      }
    }
  
    return morseTranslation.trim();
  };
  
  const translateToText = (morse) => {
    const words = morse.split(" / ");
    let textTranslation = "";
  
    for (let i = 0; i < words.length; i++) {
      const letters = words[i].split(" ");
      let translatedWord = "";
  
      for (let j = 0; j < letters.length; j++) {
        const letter = letters[j];
        const translatedLetter = morseCodeMap.get(letter);
  
        if (translatedLetter) {
          translatedWord += translatedLetter;
        }
      }
  
      textTranslation += translatedWord + " ";
    }
  
    return textTranslation.trim();
  };
  
  const handleTranslate = (event) => {
    event.preventDefault();
  
    if (event.target.id === "textToMorseForm") {
      const textInput = document.getElementById("text-input");
      const morseOutput = document.getElementById("morse-output");
  
      const text = textInput.value;
      const morseTranslation = translateToMorse(text);
  
      morseOutput.textContent = morseTranslation;
    } else if (event.target.id === "morseToTextForm") {
      const morseInput = document.getElementById("morse-input");
      const textOutput = document.getElementById("text-output");
  
      const morse = morseInput.value;
      const textTranslation = translateToText(morse);
  
      textOutput.textContent = textTranslation;
    }
  };
  
  document.getElementById("textToMorseForm").addEventListener("submit", handleTranslate);
  document.getElementById("morseToTextForm").addEventListener("submit", handleTranslate);
  