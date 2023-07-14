console.log("1");

const morseCode = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    " ": "/",
  };
  
  const translateToMorse = (text) => {
    const sanitizedText = text.toUpperCase();
    const translatedText = [];
  
    for (let i = 0; i < sanitizedText.length; i++) {
      const char = sanitizedText[i];
      const morseChar = morseCode[char];
  
      if (morseChar) {
        translatedText.push(morseChar);
      }
    }
  
    return translatedText.join(" ");
  };
  
  const text = "hello";
  const morseTranslation = translateToMorse(text);
  console.log(morseTranslation);

  // const text = "a";
  // const morseTranslation = translateToMorse(text);
  // console.log(morseTranslation);
  //잘 돌아가는 로직
  