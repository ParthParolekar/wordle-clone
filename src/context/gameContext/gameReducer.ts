import generateWord from "../../utils/generateWord";

type KeyboardType = { key: string; bgcolor: string };

export type InitialStateType = {
  answer: string;
  guesses: string[];
  keyboard: KeyboardType[][];
  userInput: string[];
  pointer: number;
};
const keyboard = [
  [
    { key: "q", bgcolor: "bg-gray-500" },
    { key: "w", bgcolor: "bg-gray-500" },
    { key: "e", bgcolor: "bg-gray-500" },
    { key: "r", bgcolor: "bg-gray-500" },
    { key: "t", bgcolor: "bg-gray-500" },
    { key: "y", bgcolor: "bg-gray-500" },
    { key: "u", bgcolor: "bg-gray-500" },
    { key: "i", bgcolor: "bg-gray-500" },
    { key: "o", bgcolor: "bg-gray-500" },
    { key: "p", bgcolor: "bg-gray-500" },
  ],
  [
    { key: "a", bgcolor: "bg-gray-500" },
    { key: "s", bgcolor: "bg-gray-500" },
    { key: "d", bgcolor: "bg-gray-500" },
    { key: "f", bgcolor: "bg-gray-500" },
    { key: "g", bgcolor: "bg-gray-500" },
    { key: "h", bgcolor: "bg-gray-500" },
    { key: "j", bgcolor: "bg-gray-500" },
    { key: "k", bgcolor: "bg-gray-500" },
    { key: "l", bgcolor: "bg-gray-500" },
  ],
  [
    { key: "Enter", bgcolor: "bg-gray-500" },
    { key: "z", bgcolor: "bg-gray-500" },
    { key: "x", bgcolor: "bg-gray-500" },
    { key: "c", bgcolor: "bg-gray-500" },
    { key: "v", bgcolor: "bg-gray-500" },
    { key: "b", bgcolor: "bg-gray-500" },
    { key: "n", bgcolor: "bg-gray-500" },
    { key: "m", bgcolor: "bg-gray-500" },
    { key: "Back", bgcolor: "bg-gray-500" },
  ],
];
export const initialState: InitialStateType = {
  answer: generateWord(),
  guesses: [],
  keyboard,
  userInput: ["", "", "", "", ""],
  pointer: 0,
};

export const gameReducer = (
  state: InitialStateType,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case "GENERATE_NEW_WORD":
      return { ...state, answer: generateWord() };
    case "ADD_USER_INPUT":
      return {
        ...state,
        userInput: state.userInput.map((x, i) =>
          i === state.pointer ? action.payload : x
        ),
      };
    case "REMOVE_USER_INPUT":
      return {
        ...state,
        userInput: state.userInput.map((x, i) =>
          i === state.pointer - 1 ? "" : x
        ),
      };
    case "INCREMENT_POINTER":
      return {
        ...state,
        pointer: state.pointer + 1,
      };
    case "DECREMENT_POINTER":
      return {
        ...state,
        pointer: state.pointer - 1,
      };
    case "ADD_NEW_GUESS":
      return {
        ...state,
        guesses: [...state.guesses, action.payload],
        userInput: ["", "", "", "", ""],
        pointer: 0,
      };
    case "EDIT_KEYBOARD":
      return {
        ...state,
        keyboard: state.keyboard.map((keyboardline) =>
          keyboardline.map((key) => {
            if (key.key === action.payload.key) {
              if (key.bgcolor === "bg-[#538d4e]") {
                return { ...key };
              }
              if (
                key.bgcolor === "bg-[#b59f3b]" &&
                action.payload.bgcolor === "bg-[#538d4e]"
              ) {
                return { ...action.payload };
              }
              if (
                key.bgcolor === "bg-[#3a3a3c]" &&
                (action.payload.bgcolor === "bg-[#538d4e]" ||
                  action.payload.bgcolor === "bg-[#b59f3b]")
              ) {
                return { ...action.payload };
              }
              if (key.bgcolor === "bg-gray-500") {
                return { ...action.payload };
              }
              return { ...key };
            } else {
              return { ...key };
            }
          })
        ),
      };
    case "EDIT_USER_INPUT":
      return { ...state, userInput: action.payload };
    case "RESET":
      return { ...initialState, answer: generateWord() };
    default:
      return state;
  }
};
