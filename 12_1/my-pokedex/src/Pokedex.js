import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';
import './App.css';

class Button extends React.Component {
    render() {
        return (
        <button onClick={this.props.evento} 
        value={this.props.value}>{this.props.nome}</button>
        );
    }
}

class Pokedex extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({btnvalue: 0, counter: 0});
    }

    clickme = event => {
        this.setState({btnvalue: event.target.value, counter}, () => {
            counter: counter + btnvalue
        console.log(this.state)
        })
    }

    render () {
        return (
            <div>
                <Button evento={this.clickme} value='-1' nome='Previous' />
                <Button evento={this.clickme} value='1' nome='Next' />
                <div className="flexy">
                    {pokemons.map((item, index) => <Pokemon key={index} id={item.id} 
                    name={item.name} type={item.type} image={item.image}
                    weight={item.averageWeight.value} unit={item.averageWeight.measurementUnit}
                    info={item.moreInfo} />)}
                </div>
            </div>
        )
    }
}

export default Pokedex;
