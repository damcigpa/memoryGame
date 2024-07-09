'use client'

import React, { createContext, useState, useContext, useEffect, ReactNode, Dispatch, SetStateAction } from 'react';
import useFetch from '@/app/Hooks/useFetch';
import { cardCreater, setCardStatuses, findOpenCards, resetCardsArray, arrayShuffler} from '@/Helpers/Helpers';
import Image from 'next/image';

interface AppContextProps {
  cards: Image[];
  handleClick: (event: MouseEvent) => void;
  setCards: Dispatch<SetStateAction<Image[]>>,
}

interface Image {
  id: number;
  url: string;
  text: string;
  open: boolean;
}

interface ImageListProps {
  data: any[];
}


interface Data {
  img: Image[]
}

const AppContext = createContext<AppContextProps>({
  cards: [],
  handleClick: function (event: MouseEvent): void {
    throw new Error('Function not implemented.');
  },
  setCards: Dispatch<SetStateAction<Image[]>>,
});

export const AppProvider: React.FC<{ children: ReactNode }>  = ({ children }) => {
  const dataObject = useFetch();
  const [cards, setCards] = useState<Image[]>([]);

  const handleClick = (event: MouseEvent) => {
    let cardArray = setCardStatuses(cards, event)
    setCards(cardArray)
  }


  useEffect(() => {
    if ((dataObject as unknown as Data)?.img) {
      let newObjects = (dataObject as unknown as Data).img.map((el: Image, index: number) => {
        return {
        ...el,
        id: index + 1,
      }});
      let array = [...(dataObject as unknown as Data).img, ...newObjects];
      setCards(arrayShuffler(array))
    }
  }, [dataObject]);


  return (
    <AppContext.Provider value={{ cards, handleClick, setCards }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);