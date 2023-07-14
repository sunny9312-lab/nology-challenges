export const morseCode = {
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
    " ": "/"
  };
//ysh
export const morseEng = {
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

//ysh


export const validChar = (text) => {
	const checkArr = text
		.toUpperCase()
		.split("")
		.map((ch) => morseCode[ch]);

	return checkArr.includes(undefined);
};

export const translateToMorse = (text) => {
  if (validChar(text)) {
		throw new Error(
			"Error: These kind characters are not included in Morse code (~,`, <, >, {, }, |, *, ^, %). ",
		);
	}


  const sanitizedText = text.toUpperCase();
  const translatedText = sanitizedText
    .split("")
    .map((char) => morseCode[char])
    .join(" ");

  return translatedText;
};


export const translateToText = (morse) => {
	
	const translatedText = morse
		.split(" ")
		.map((char) => morseEng[char])
		.join("");
	return translatedText;
};