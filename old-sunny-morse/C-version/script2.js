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
  
  const morseEng = {
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
  
const translateToMorse = (text) => {
  const sanitizedText = text.toUpperCase();

  const translatedText = sanitizedText
    .split("")
    .map((char) => morseCode[char])
    // .filter((morseChar) => morseChar)
    .join(" ");

  return translatedText;
};

const translateToText = (morse) => {
	
	const translatedText = morse
		.split(" ")
		.map((char) => morseEng[char])
		.join("");
	return translatedText;
};

const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const translateToMorseButton = document.getElementById("translate-to-morse");
const translateToTextButton = document.getElementById("translate-to-text");

// Add event listeners to the translation buttons

translateToMorseButton.addEventListener("click", () => {
  const input = inputText.value;
  const morseTranslation = translateToMorse(input);
  outputText.value = morseTranslation;
});

translateToTextButton.addEventListener("click", () => {
  const input = inputText.value;
  const textTranslation = translateToText(input);
  outputText.value = textTranslation;
});
