
import express, { Request, Response } from "express";

import Deck from "../models/Deck";

export async function getDeckController(req:Request, res:Response){
    const {deckId} = req.params;
    //fetch all decks and send them back to the user
  //1. how do we fetch the decks from mongo?
  const deck = await Deck.findById(deckId);
  
  //2. how do we send back the array to the ui?
  res.json(deck);
}