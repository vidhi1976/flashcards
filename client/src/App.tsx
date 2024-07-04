import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
<script src="https://cdn.tailwindcss.com"></script>;

import { getDecks, TDeck } from "./api/getDecks";
import { createDecks } from "./api/createDeck";
import { deleteDeck } from "./api/deleteDeck";

function App() {
  const [decks, setDecks] = useState<TDeck[]>([]);
  const [title, setTitle] = useState("");

  async function handleCreateDeck(e: React.FormEvent) {
    e.preventDefault();

    const deck = await createDecks(title);
    setDecks([...decks, deck]);
    setTitle("");
  }
  async function handleDeleteDeck(deckId: string) {
    await deleteDeck(deckId);
    setDecks(decks.filter((deck) => deck._id !== deckId));
  }
  useEffect(() => {
    async function fetchDecks() {
      const newDecks = await getDecks();
      setDecks(newDecks);
    }
    fetchDecks();
  }, []);
  return (
    <>
      <h1 className="m-12 font-extrabold">Your Decks ✨</h1>
      <hr />
      <div className="App flex justify-center m-10 items-center">
        <form onSubmit={handleCreateDeck}>
          <div className="flex justify-center items-center">
            <label className="text-lg font-bold text-amber-300" htmlFor="deck-title">Deck Title</label>
            <input
              className="ml-6 p-1 rounded-lg bg-gray-900"
              id="deck-title"
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <button className="m-5">Create Deck</button>
        </form>
      </div>
      <hr className=''></hr>
      <ul className=" decks grid justify-center iems-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3  mt-10 gap-4 ">
        {decks.map((deck) => (
          <a
            href="#"
            className="m-5 text-center block max-w-sm p-4 bg-white border border-gray-100 rounded-lg shadow hover:bg-gray-500 dark:bg-gray-800 dark:border-gray-900 dark:hover:bg-gray-700 h-64 w-64"
          >
            <button
              className="flex ml-auto text-xs text-right bg-gray-800"
              onClick={() => handleDeleteDeck(deck._id)}
            >
              X
            </button>

            <h5 className="m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <Link to={`decks/${deck._id}`}>{deck.title}</Link>
            </h5>
          </a>
        ))}
      </ul>
      
    </>
  );
}

export default App;
