import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./App.css";
<script src="https://cdn.tailwindcss.com"></script>;

import { TDeck } from "./api/getDecks";
import { createCard } from "./api/createCard";
import { getDeck } from "./api/getDeck";
import { deleteCard } from "./api/deleteCard";

export default function Deck() {
  const [deck, setDeck] = useState<TDeck | undefined>();
  const [cards, setCards] = useState<string[]>([]);
  const [text, setText] = useState("");
  const { deckId } = useParams();

  async function handleCreateDeck(e: React.FormEvent) {
    e.preventDefault();
    if (!deckId) return;

    const { cards: serverCards } = await createCard(deckId, text);
    setCards(serverCards);
    setText("");
  }

  async function handleDeleteCard(index: number) {
    if (!deckId) return;
    const newDeck = await deleteCard(deckId, index);
    setCards(newDeck.cards);
  }

  useEffect(() => {
    async function fetchDeck() {
      if (!deckId) return;
      const newDeck = await getDeck(deckId);
      setDeck(newDeck);
      setCards(newDeck.cards);
    }
    fetchDeck();
  }, [deckId]);

  return (
    <>
      <h1 className="mt-14 font-mono font-extrabold">{deck?.title}</h1>
      <ul className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center mt-10 gap-4">
        {cards.map((card, index) => (
          <a
            href="#"
            className="m-5 block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 h-auto w-auto"
            key={index}
          >
            <button
              className="flex ml-auto text-xs bg-gray-800"
              onClick={() => handleDeleteCard(index)}
            >
              X
            </button>
            <h5 className="text-lg p-8 pt-7 font-bold tracking-tight text-gray-900 dark:text-white break-words">
              {card}
            </h5>
          </a>
        ))}
      </ul>

      <div className="App flex justify-center">
        <form onSubmit={handleCreateDeck}>
          <div className="flex flex-col">
            <label htmlFor="card-text" className="h-11 text-3xl">
              Card Text :
            </label>
            <textarea
              className="ml-6 p-2 w-96 h-48 rounded-lg bg-gray-900"
              id="card-text"
              value={text}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setText(e.target.value);
              }}
            />
          </div>
          <button className="mt-10">Create Card</button>
        </form>
      </div>
    </>
  );
}
