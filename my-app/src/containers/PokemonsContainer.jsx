import React from "react";
import {GET_POKEMONS} from "../graphql/get-pokemons"
import {Pokemon} from "../components/Pokemon"
import { useQuery } from '@apollo/react-hooks';

export function PokemonsContainer() {
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: { first: 9 },
    });
    
    return (
        <div className="container">
            {pokemons && pokemons.map((pokemon, index) => <Pokemon pokemon={pokemon} key={pokemon.id} />)}
        </div>
    );
}