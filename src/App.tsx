import styles from "./App.module.css";
import NoteList from "./components/Layout/NoteList/NoteList";

function App() {
  return (
    <div className={styles.pageWrapper}>
      <NoteList
        notes={[
          { title: "Shopping List", text: "Milk, bread, eggs, cheese, bacon" },
          {
            title: "Goals for the Week",
            text: "Finish project, hit the gym 3 times, cook dinner every night",
          },
          {
            title: "Books to Read",
            text: "The Great Gatsby, 1984, The Catcher in the Rye",
          },
          {
            title: "Movies to Watch",
            text: "The Godfather, Pulp Fiction, The Shawshank Redemption",
          },
          {
            title: "Recipes to Try",
            text: "Chicken Parmesan, Chocolate Cake, Shrimp Scampi",
          },
          {
            title: "Travel Bucket List",
            text: "Paris, Tokyo, New York, Sydney, Santorini",
          },
          {
            title: "Gift Ideas",
            text: "Scented candles, spa gift card, book on gardening",
          },
          {
            title: "Workout Plan",
            text: "Monday - Arms, Tuesday - Legs, Wednesday - Core, Thursday - Rest, Friday - Full Body",
          },
          {
            title: "Self-Care Ideas",
            text: "Meditation, yoga, bubble bath, journaling, painting",
          },
        ]}
      />
    </div>
  );
}

export default App;
