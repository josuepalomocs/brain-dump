import { Card as ICard } from "../../../types";
import styles from "./Card.module.css";

interface CardProps extends ICard {}

export default function Card({ title, children }: CardProps) {
  function renderCardTitle() {
    return (
      <div className={styles.titleContainer}>
        <h4 className={styles.titleContainerText}>
          {title ? title : "Untitled note"}
        </h4>
      </div>
    );
  }

  function renderCardContent() {
    return <div className={styles.contentContainer}>{children}</div>;
  }

  return (
    <div className={styles.componentContainer}>
      {renderCardTitle()}
      {renderCardContent()}
    </div>
  );
}
