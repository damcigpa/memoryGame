  export default interface Card {
  id: number;
  value: number;
  imgSrc: string;
  open: boolean;
}
  
  const arrayShuffler = (array: Card[]): Card[] => {
    for (let i = array.length - 1; i > 0; i--) {
      let generatedIndex = Math.floor(Math.random() * (i + 1));
  
      [array[i], array[generatedIndex]] = [array[generatedIndex], array[i]];
    }
  
    return array;
  };

  export const cardCreater = (arr : Card[]): Card[] => {
    let cardArray: Card[] = []

    let array = Array(arr.length * 2).fill(null).map((_, index) => {
      return {
        'id': index + 1,
        'value': index + 1,
        'open': false,
        'imgSrc': '',
    }
  });

  arr.forEach((_, index) => {
    let firstCard = array[index];
    let secondCard = array[(array.length-1) - index];
    firstCard.imgSrc = arr[index] as unknown as string;
    secondCard.imgSrc = arr[index] as unknown as string;
    cardArray.push(firstCard);
    cardArray.push(secondCard);
  })

  const shuffledArray = arrayShuffler(cardArray)

  return shuffledArray;
  };


  export const setCardStatuses = (arr: Card[], event: any): Card [] => {
    return arr.map((e)=> {
      if (e.id == event.target.id) {
        return {...e, open: true}
      }

      return { ...e }
    })
  }

  export const findOpenCards = (arr: Card[]): Card [] => {
    return arr.filter((e) => {
      return e.open === true
    })
  }

  export const resetCardsArray = (arrayFirst: Card[], arraySecond: Card[]): Card[] => {
    let doOpenElementsHaveSameImages = arraySecond.every(card => card.imgSrc === arraySecond[0].imgSrc);

    if (doOpenElementsHaveSameImages) {
      return arrayFirst.filter(item => !arraySecond.includes(item));
    } 

    return arrayFirst.map((e) => {
      return { ...e, open: false }
    })
  }

export const fetchContent = async (url: string) => {
  const response = await fetch(url, { cache: 'no-store' });
  return await response.json();
}
