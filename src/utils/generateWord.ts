import words from "../db/words";

const generateWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

export default generateWord;
