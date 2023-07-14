// const morseCode = {
//     'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
//     'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
//     'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
//     '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '.': '.-.-.-',
//     ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...',
//     ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-',
//     '@': '.--.-.', ' ': '/'
//   };
  
//   const translateToMorse = (text) => {
   
//     const sanitizedText = text.toUpperCase();
//     const translatedText = [];
  
//     for (let i = 0; i < sanitizedText.length; i++) {
//       const char = sanitizedText[i];
//       const morseChar = morseCode[char];
  
//       if (morseChar) {
//         translatedText.push(morseChar);
//       }
//     }
  
//     return translatedText.join(' ');
//   };
  
//   const translateToText = (morse) => {
//     const words = morse.split(' / ');
//     let translatedText = '';
  
//     for (let i = 0; i < words.length; i++) {
//       const letters = words[i].split(' ');
//       let translatedWord = '';
  
//       for (let j = 0; j < letters.length; j++) {
//         const letter = letters[j];
//         const translatedLetter = Object.keys(morseCode).find((key) => morseCode[key] === letter);
  
//         if (translatedLetter) {
//           translatedWord += translatedLetter;
//         }
//       }
  
//       translatedText += translatedWord + ' ';
//     }
  
//     return translatedText.trim();
//   };

  //ysh another java script code for morse
  const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
    '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '.': '.-.-.-',
    ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...',
    ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-',
    '@': '.--.-.', ' ': '/'
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
  
    return translatedText.join(' ');
  };
  
  const translateToText = (morse) => {
    const words = morse.split(' / ');
    let translatedText = '';
  
    for (let i = 0; i < words.length; i++) {
      const letters = words[i].split(' ');
      let translatedWord = '';
  
      for (let j = 0; j < letters.length; j++) {
        const letter = letters[j];
        const translatedLetter = Object.keys(morseCode).find((key) => morseCode[key] === letter);
  
        if (translatedLetter) {
          translatedWord += translatedLetter;
        }
      }
  
      translatedText += translatedWord + ' ';
    }
  
    return translatedText.trim();
  };
  
  // Example usage:
//   const inputText = 'Hello World';
//   const morseTranslation = translateToMorse(inputText);
//   console.log('Morse Translation:', morseTranslation);
  
//   const morseInput = '-- .- ... / .-- --- .-. .-.. -..';
//   const textTranslation = translateToText(morseInput);
//   console.log('Text Translation:', textTranslation);
  