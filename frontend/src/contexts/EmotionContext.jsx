import { createContext, useState, useContext } from 'react';

const EmotionContext = createContext('')

export const EmotionProvider = ({ children }) => {

  const [emotion, setEmotion] = useState('')

  return <EmotionContext.Provider value={emotion}>{children}</EmotionContext.Provider>
}

export const useEmotion = () => {
  const emotionContext = useContext(EmotionContext);
  return emotionContext;
};