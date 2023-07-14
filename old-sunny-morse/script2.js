console.log("2");

const morseCode2 = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "/": " ",
  };
  
  const translateToText = (morse) => {
    const words = morse.split(" / ");
    let translatedText = "";
  
    for (let i = 0; i < words.length; i++) {
      const letters = words[i].split(" ");
      let translatedWord = "";
  
      for (let j = 0; j < letters.length; j++) {
        const letter = letters[j];
        const translatedLetter = morseCode2[letter];
  
        if (translatedLetter) {
          translatedWord += translatedLetter;
        }
      }
  
      translatedText += translatedWord + " ";
    }
  
    return translatedText.trim();
  };
  
  const morse = ".-";
  // const morse = "- .... . / .-- --- .-. .-.. -.. -.-.--";
  const textTranslation = translateToText(morse);
  console.log(textTranslation, "textTranslation");
  