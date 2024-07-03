
import express, { Request, Response } from "express";



import Deck from "../models/Deck";

export async function deleteDeckController(req:Request , res:Response){
    //TODO
  //1. get the deck id from url
  const deckId = req.params.deckId;
  //2. delete the deck from mongo
  const deck = await Deck.findByIdAndDelete(deckId);
  //3. return the deleted deck to user who made the request
  res.json(deck);
}