import { useEffect } from "react";
import { db } from "./firebase";
import { getDocs, collection } from "firebase/firestore";
import "./App.css";

function App() {
  const moviesCollectionRef = collection(db, "movies");

  useEffect(() => {
    const getMovieList = async () => {
      // read the data
      // set the movie list

      try {
        const data = await getDocs(moviesCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(filteredData);
      } catch (err) {
        console.log(err);
      }
    };

    getMovieList();
  }, []);

  return (
    <>
      <input placeholder="title" />
      <input placeholder="releaseDate" />
      <button type="submit">확인</button>
    </>
  );
}

export default App;
