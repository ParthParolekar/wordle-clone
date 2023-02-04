import { createContext, useContext, useReducer } from "react";
import { gameReducer, initialState } from "./gameReducer";

interface Props {
  children: React.ReactNode;
}

//@ts-ignore
const GameContext = createContext();

export const GameProvider: React.FC<Props> = ({ children }) => {
  const [gameState, gameDispatch] = useReducer(gameReducer, initialState);
  return (
    <GameContext.Provider value={[gameState, gameDispatch]}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
