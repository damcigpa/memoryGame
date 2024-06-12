'use client'

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { cardCreater, setCardStatuses, findOpenCards, resetCardsArray } from '@/Helpers/Helpers';

interface AppContextProps {
  cards: [];
}

interface ImageListProps {
  data: any[];
}

interface Image {
  id: number;
  url: string;
  text: string;
}

interface Data {
  img: Image[]
}

const AppContext = createContext<AppContextProps>({cards: []});

export const AppProvider: React.FC<{ children: ReactNode }>  = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [data, setData] = useState<Data>({img:[]})
  const imgSourceArray = ['./flower.jpg', './landscape.jpg', './close-up.jpg'];

  const handleClick = (event: MouseEvent) => {
    let cardArray = setCardStatuses(cards, event)
    setCards(cardArray)
  }


  useEffect(()=> {
    // async function fetchData() {
    //   const response = await fetch('/api/images/get');
    //   const data = await response.json();
    //   console.log('4', data);
    // }
    // fetchData();


    fetchContent('http://localhost:3000/api/images/get')
    setCards(cardCreater(imgSourceArray))
  }, [])


  return (
    <AppContext.Provider value={{ cards, handleClick, setCards, fetchContent, data }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);