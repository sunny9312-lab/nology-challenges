import {  validChar, translateToMorse , translateToText } from "./morseCheck2.js";

describe("Testing translateToMorse() that translate English text to Morse", () => {
    const errEng = new Error(
        "Error: Text includes characters that don't exist in Morse code (such as ~,`, <, >, {, }, |, *, ^, %). Kindly remove it."
    );

    
    it("should translate a single English character", () => {
        expect(translateToMorse("r")).toBe(".-.");
        expect(translateToMorse("s")).toBe("...");
    });

    it("should convert a space between words to /", () => {
        expect(translateToMorse("hello world")).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
        expect(translateToMorse("this is a text")).toBe("- .... .. ... / .. ... / .- / - . -..- -");
    });
});


describe("Testing translateToText() that translate Morse code to English text", () => {
	
	it("should remove space between English characters", () => {
		expect(translateToText(".... . .-.. .-.. ---")).toBe("HELLO");
		expect(translateToText("--. --- --- -.. -... -.-- .")).toBe("GOODBYE");
	});
	
});


// matchers (functions that compare things)
