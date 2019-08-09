import React, { useState, useEffect } from 'react';
import * as PokeQuery from "pokeapi-js-wrapper";
import {EvolutionChain} from "./evolution-chain";

export const PokeEntry = ({entry}) => {
  const PQ = new PokeQuery.Pokedex();
  const [pokemon, setPokemon] =  useState({generation:{}, evolution_chain: {}});
  
  useEffect(() => {
    PQ.resource(entry.pokemon_species.url).then(res => {
      setPokemon(res);
    });
  });
  
  return (
    <div>
      <div>{pokemon.name}</div>
        <div>
          Generation: {pokemon.generation.name}
        </div>
        <div>
          Evolution Chain:
          <EvolutionChain key={pokemon.name} url={pokemon.evolution_chain.url}></EvolutionChain>
        </div>
    </div>
  )
};