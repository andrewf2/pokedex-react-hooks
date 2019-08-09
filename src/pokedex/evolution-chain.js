import React, { useState, useEffect } from 'react';
import * as PokeQuery from "pokeapi-js-wrapper";

export const EvolutionChain = ({url}) => {
  const PQ = new PokeQuery.Pokedex();
  const [chain, setEvoChain] = useState({ evolves_to: []});
  
  useEffect(() => {
    if(url){
      PQ.resource(url).then(res => {
        setEvoChain(res.chain)
      });
    }
  });
  
  return (
    <div>
      { chain.evolves_to.map(pokemon => {
        if(pokemon.name){
          return (<div key={pokemon.name}> {pokemon.name} </div>)
        }
      })
      }
    </div>
  )
  
  
}