import { useContext } from "react";
import styles from './Component.module.css'
import Image from "next/image";
import { useAppContext } from "@/Contexts/AppContext";

export const Component=() => {
  const {cards, handleClick} = useAppContext();
  console.log(cards)

    return (
      <div>
        {cards.map((card) => {
          return <div key={card.id} className={styles.card}>
            <div className={styles.cardInner}>
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