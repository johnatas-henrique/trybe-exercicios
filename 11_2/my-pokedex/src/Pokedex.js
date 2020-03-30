import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';
import './App.css';

class Pokedex extends React.Component {
    render () {
        return (
            <div className="flexy">
                {pokemons.map((item, index) => <Pokemon key={index} id={item.id} 
                name={item.name} type={item.type} image={item.image}
                weight={item.averageWeight.value} unit={item.averageWeight.measurementUnit}
                info={item.moreInfo} />)}
            </div>
        )
    }
}

export default Pokedex;
