  interface Card {
  id: number;
  value: number;
  imgSrc: string;
}
  
  const arrayShuffler = (array: object[]): object[] => {
    for (let i = array.length - 1; i > 0; i--) {
      let generatedIndex = Math.floor(Math.random() * (i + 1));
  
      [array[i], array[generatedIndex]] = [array[generatedIndex], array[i]];
    }
  
    return array;
  };

  export const cardCreater = (arr : object[]): Card [] => {
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
    firstCard.imgSrc = arr[index];
    secondCard.imgSrc = arr[index];
    cardArray.push(firstCard);
    cardArray.push(secondCard);
  })

  const shuffledArray = arrayShuffler(cardArray)

  return shuffledArray;
  };


  export const setCardStatuses = (arr: object[], event: MouseEvent): Card [] => {
    return arr.map((e)=> {
      if (e.id == event.target.id) {
        return {...e, open: true}
      }

      return { ...e }
    })
  }

  export const findOpenCards = (arr: object[]): Card [] => {
    return arr.filter((e) => {
      return e.open === true
    })
  }

  export const resetCardsArray = (arrayFirst: Card[], arraySecond: Card[]): void => {
    let doOpenElementsHaveSameImages = arraySecond.every(card => card.imgSrc === arraySecond[0].imgSrc);

    if (doOpenElementsHaveSameImages) {
      return arrayFirst.filter(item => !arraySecond.includes(item));
    } 

    return arrayFirst.map((e) => {
      return { ...e, open: false }
    })
  }
