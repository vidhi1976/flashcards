
import express, { Request, Response } from "express";

import Deck from "../models/Deck";

export async function getDecksController(req:Request, res:Response){
    //fetch all decks and send them back to the user
  //1. how do we fetch the decks from mongo?
  const decks = await Deck.find();
  
  //2. how do we send back the array to the ui?
  res.json(decks);
}