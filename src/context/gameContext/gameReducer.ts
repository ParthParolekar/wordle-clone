import generateWord from "../../utils/generateWord";

type KeyboardType = { key: string; bgcolor: string; isGuessed: boolean };

export type InitialStateType = {
  answer: string;
  guesses: string[];
  keyboard: KeyboardType[][];
};
const keyboard = [
  [
    { key: "q", bgcolor: "bg-gray-500", isGuessed: false },
    { key: "w", bgcolor: "bg-gray-500", isGuessed: false },
    { key: "e", bgcolor: "bg-gray-500", isGuessed: false },
    { key: "r", bgcolor: "bg-gray-500", isGuessed: false },
    { key: "t", bgcolor: "bg-gray-500", isGuessed: false },
    { key: "y", bgcolor: "bg-gray-500", isGuessed: false },
    { key: "u", bgcolor: "bg-gray-500", isGuessed: false },
    { key: "i", bgcolor: "bg-gray-500", isGuessed: false },
    { key: "o", bgcolor: "bg-gray-500", isGuessed: false },
    { key: "p", bgcolor: "bg-gray-500", isGuessed: false },
  ],
  [
    { key: "a", bgcolor: "bg-gray-500", isGuessed: false },
    { key: "s", bgcolor: "bg-gray-500", isGuessed: false },
    { key: "d", bgcolor: "bg-gray-500", isGuessed: false },
    { key: "f", bgcolor: "bg-gray-500", isGuessed: false },
    { key: "g", bgcolor: "bg-gray-500", isGuessed: false },
    { key: "h", bgcolor: "bg-gray-500", isGuessed: false },
    { key: "j", bgcolor: "bg-gray-500", isGuessed: false },
    { key: "k", bgcolor: "bg-gray-500", isGuessed: false },
    { key: "l", bgcolor: "bg-gray-500", isGuessed: false },
  ],
  [
    { key: "z", bgcolor: "bg-gray-500", isGuessed: false },
    { key: "x", bgcolor: "bg-gray-500", isGuessed: false },
    { key: "c", bgcolor: "bg-gray-500", isGuessed: false },
    { key: "v", bgcolor: "bg-gray-500", isGuessed: false },
    { key: "b", bgcolor: "bg-gray-500", isGuessed: false },
    { key: "n", bgcolor: "bg-gray-500", isGuessed: false },
    { key: "m", bgcolor: "bg-gray-500", isGuessed: false },
  ],
];
export const initialState: InitialStateType = {
  answer: generateWord(),
  guesses: [],
  keyboard,
};

export const gameReducer = (
  state: InitialStateType,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case "GENERATE_NEW_WORD":
      return { ...state, answer: generateWord() };
    case "ADD_NEW_GUESS":
      return { ...state, guesses: [...state.guesses, action.payload] };
    case "EDIT_KEYBOARD":
      return {
        ...state,
        keyboard: state.keyboard.map((keyboardline) =>
          keyboardline.map((key) =>
            key.key === action.payload.key ? { ...action.payload } : { ...key }
          )
        ),
      };
    case "RESET":
      return { ...initialState, answer: generateWord() };
    default:
      return state;
  }
};
