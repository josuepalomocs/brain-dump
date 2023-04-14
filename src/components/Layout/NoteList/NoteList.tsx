import styles from "./NoteList.module.css";
import { Note } from "../../../types";
import Card from "../Card/Card";

interface CardListProps {
  notes: Note[];
}

export default function NoteList({ notes }: CardListProps) {
  function renderNoteCards() {
    return notes.map((note) => {
      return (
        <Card title={note.title}>
          <p>{note.text}</p>
        </Card>
      );
    });
  }

  return <ul className={styles.componentContainer}>{renderNoteCards()}</ul>;
}
