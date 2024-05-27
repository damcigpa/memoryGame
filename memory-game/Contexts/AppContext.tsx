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
    setCards(cardArray)
  }

  useEffect(()=> {
    async function fetchData() {
      const response = await fetch('/api/images');
      const data = await response.json();
      console.log('4', data);
    }
    fetchData();

    setCards(cardCreater(imgSourceArray))
  }, [])


  return (
    <AppContext.Provider value={{ cards, handleClick, setCards }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);