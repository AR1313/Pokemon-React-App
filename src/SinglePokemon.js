import React, {Component} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
/*jshint esversion: 6*/


function SinglePokemon(match) {

  //`${match.match.params.id}`
  var idToUse = `${match.match.params.id}`;
  //`${match.match.params.id}`;

   console.log(typeof idToUse);
    const { loading, error, data } = useQuery(gql`
    {

     pokemon(id: "${idToUse}") {
       id
       number
       name
       maxCP
       maxHP
       image
       types
       evolutions {
         id
         number
         name
         maxCP
         maxHP
         image
         types
       }
     }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

      return(
        <div key={data.pokemon.id} className="pokemonBoxSingle">
          <h3 className="header"> {data.pokemon.name}!</h3>
          <img src={data.pokemon.image} />
          <ul>
            <li>ID: {data.pokemon.id}</li>
            <li>Number: {data.pokemon.number}</li>
            <li>MaxCP: {data.pokemon.maxCP}</li>
            <li>MaxHP: {data.pokemon.maxHP}</li>
            <ul>Types: {
             data.pokemon.types.map((result) =>(
              <li> {result} </li>
            ))
          }
          </ul>
            </ul>
          <ul className="evolutions">Evolutions:
            {
              data.pokemon.evolutions.map((result) =>(
                  <li> {result.name} </li>
                ))
              }
          </ul>
         </div>
       )
}
//return toRender;
//return toRender;
  /*
console.log(data);
 return (
   <div>
  {data.pokemon.name}
   </div>
 )
*/
  //{match.match.params.id}
export default SinglePokemon;
