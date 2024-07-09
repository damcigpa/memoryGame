
import { useContext, useEffect } from "react";
import styles from './Component.module.css'
import Image from "next/image";
import { useAppContext } from "@/Contexts/AppContext";
import { resetCardsArray, findOpenCards, doOpenElementsHaveSameImages, filterArray } from "@/Helpers/Helpers";

export const Component=() => {
  const {cards, handleClick, setCards} = useAppContext();
  console.log(1,cards)

  useEffect(() => {
    let openCards = findOpenCards(cards)
    let tid;
 
    if (openCards.length > 1) {
    tid = setTimeout(() => {
      let cardArray = []
      if (doOpenElementsHaveSameImages(openCards)) {
        cardArray = filterArray(cards, openCards);
      } else {
        cardArray = resetCardsArray(cards);
      }

      setCards(cardArray)
    }, 1000);
    }

    return () => {
      clearTimeout(tid);
    }
  }, [cards])
  

    return (
      <div className={`flex container ${styles.flexRow}`}>
        {cards.map((card) => {
          return <div key={card.id} className={styles.card}>
            <div className={`${styles.cardInner} ${card.open ? styles.open : ''}`}>
              <div className={styles.cardFront} data-source={card.imgSrc} id={card.id}  onClick={(e) => {handleClick(e)}}/>
              <div className={styles.cardBack}>
                <img className={styles.img} src={card.url} alt={'image'} width={600} height={600} />
                <h3>{card.text}</h3>
              </div>
            </div>
          </div>
        })}
    </div>
    );
  }