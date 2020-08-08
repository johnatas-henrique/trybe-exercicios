import React from 'react';
import './App.css';

class Pokemon extends React.Component {
  render() {
    const { id, name, type, weight, unit, image, info } = this.props;
    return (
      <div className='poke-square'>
        <div className='w-60'>
          <h2>#{id} - {name}</h2>
          <p>{type}</p>
          <p>Peso médio: {weight}{unit}</p>
          <p><a href={info} target='_blank'>Mais info</a></p>
        </div>
        <div className='w-40'>
          <img src={image} alt={name}></img>
        </div>
      </div>
    );
  }
}

export default Pokemon;
