function translateToPigLatin() {
    const text = prompt("Enter a sentence to translate to Pig Latin:");
    if (!text || text.trim().length === 0) {
      console.log("Input cannot be translated.");
      return;
    }
  
    const translatedText = text
      .toLowerCase()
      .split(" ")
      .map(word => {
        if (isVowel(word[0])) {
          return word + "way";
        } else {
          const consonantCluster = getConsonantCluster(word);
          return word.slice(consonantCluster.length) + consonantCluster + "ay";
        }
      })
      .join(" ");
  
    console.log("Pig Latin Translation: " + translatedText);
  }
  
  function isVowel(letter) {
    const vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(letter);
  }
  
  function getConsonantCluster(word) {
    const consonants = [];
    for (let i = 0; i < word.length; i++) {
      if (!isVowel(word[i])) {
        consonants.push(word[i]);
      } else {
        break;
      }
    }
    return consonants.join("");
  }
  
  // Call the function to translate user input
  translateToPigLatin();
  