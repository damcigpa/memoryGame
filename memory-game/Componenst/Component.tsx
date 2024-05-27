import { useContext, useEffect } from "react";
import styles from './Component.module.css'
import Image from "next/image";
import { useAppContext } from "@/Contexts/AppContext";
import { resetCardsArray, findOpenCards } from "@/Helpers/Helpers";

export const Component=() => {
  const {cards, handleClick, setCards} = useAppContext();

  useEffect(() => {
    let openCards = findOpenCards(cards)
    let tid;
    console.log(openCards)
 
    if (openCards.length > 1) {
    tid = setTimeout(() => {
      setCards(resetCardsArray(cards, openCards))
    }, 1000);
    }

    return () => {
      clearTimeout(tid);
    }
  }, [cards])
  

    return (
      <div>
        {cards.map((card) => {
          return <div key={card.id} className={styles.card}>
            <div className={`${styles.cardInner} ${card.open ? styles.open : ''}`}>
              <div className={styles.cardFront} data-source={card.imgSrc} id={card.id}  onClick={(e) => {handleClick(e)}}>
                {card.value}
              </div>
              <div className={styles.cardBack}>
                <img src={card.imgSrc} alt={'image'} width={400} height={400} />
              </div>
            </div>
          </div>
        })}
    </div>
    );
  }