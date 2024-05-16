'use client'

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { cardCreater, setCardStatuses, findOpenCards, resetCardsArray } from '@/Helpers/Helpers';

interface AppContextProps {
  cards: [];
}
const AppContext = createContext<AppContextProps>({cards: []});

export const AppProvider: React.FC<{ children: ReactNode }>  = ({ children }) => {
  const [cards, setCards] = useState([]);
  const imgSourceArray = ['./flower.jpg', './landscape.jpg', './close-up.jpg'];

  const handleClick = (event: MouseEvent) => {
    let cardArray = setCardStatuses(cards, event)
    const openCards = findOpenCards(cardArray)
    setCards(cardArray)
   
    if (openCards.length === 2) {
      console.log('wtf', resetCardsArray(cardArray, openCards))

      setTimeout(() => setCards(resetCardsArray(cardArray, openCards)), 400)
      return;
    }
  }

  useEffect(()=> {
    setCards(cardCreater(imgSourceArray))
  }, [])


  return (
    <AppContext.Provider value={{ cards, handleClick }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);