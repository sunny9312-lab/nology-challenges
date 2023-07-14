import { translateToMorse } from "./morseCheck.js";

describe("Testing beMorse() that translate English text to Morse", () => {
    
    
    it("should translate a single English character", () => {
		expect(translateToMorse("r")).toBe(".-.");
		expect(translateToMorse("s")).toBe("...");
		
	});
    
    
    it("should convert a space between words to /", () => {
		expect(translateToMorse("hello world")).toBe(
			".... . .-.. .-.. --- / .-- --- .-. .-.. -..",
		);
		expect(translateToMorse("this is a text")).toBe(
			"- .... .. ... / .. ... / .- / - . -..- -",
		);
	});

});

// matchers (functions that compare things)
