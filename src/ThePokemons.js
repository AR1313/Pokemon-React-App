import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import './index.css';

const Button = styled.button`
  background: transparent;
  border-radius: 6px;
  border: 2px solid coral;
  color: coral;
  margin: 1 1em;
  margin-top: 12px;
  padding: 0.50em 1em;
  font-size: 18px;
`

function Pokemons() {
  const { loading, error, data } = useQuery(gql`
    {
     pokemons(first: 10) {
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


  if (loading) return <p>Almost ready! </p>;
  if (error) return <p>Something went wrong! :(</p>;

var toRender = data.pokemons.map(({ id,number,name,maxCP, maxHP,image,types,evolutions }) => {


  if (evolutions) return(
    <div key={id} className="pokemonBox">
    <h3 className="header"> Meet {name}!</h3>
    <img src={image} />
    <ul>
      <li>ID: {id}</li>
      <li>Number: {number}</li>
      <li>MaxCP: {maxCP}</li>
      <li>MaxHP: {maxHP}</li>
      <br></br>
      <ul>Types: {
       types.map((result) =>(
        <li> {result} </li>
      ))
    }
    </ul>
    <Link to={`/SinglePokemon/${id}`}>
     <Button> More Information </Button>
    </Link>
    </ul>
    </div>
   )


  else return (
    <div key={id} className="pokemonBox">
    <h3 className="header"> Meet {name}!</h3>
    <img src={image} />
    <ul>
      <li>ID: {id}</li>
      <li>Number: {number}</li>
      <li>MaxCP: {maxCP}</li>
      <li>MaxHP: {maxHP}</li>
      <li>Types: {types}</li>
    </ul>
    </div>)
});

return toRender;

}
export default Pokemons;




/*data.pokemons.map(({ id,number,name,evolutions }) => (
  if (a ==1){
    return  <p>Akila</p>;
  }
));
*/

/*
<div key={id}>
<p> {name}: {evolutions[0].name} </p>
</div>
*/

/*
return data.pokemons.map(({ id,number,name,evolutions }) => (
  //console.log(evolutions[0].name),
 <div key={id}>
   <p>
     {name}: {number}
   </p>
 </div>
));
*/
