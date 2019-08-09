import * as PokeQuery from 'pokeapi-js-wrapper';
import React, { useState, useEffect } from 'react';
import {PokeEntry} from "./pokedex-entry";


export const Pokedex = () => {
  const PQ = new PokeQuery.Pokedex();
  const [entries, setState] = useState([]);
  
  useEffect(() => {
    PQ.getPokedexByName("kanto").then(res => {
      setState(res.pokemon_entries);
    });
  });
  
  return (
    <div>
      {
        entries.map(entry => <PokeEntry key={entry.entry_number} entry={entry}></PokeEntry>)
      }
    </div>
  )
}