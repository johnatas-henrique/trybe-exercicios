import React from 'react';

class Botao extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listaItens: this.props.arrayItems,
      caixaMaior: this.props.arrayItems[0],
      estado: false,
    }
    this.divCaixaMenor = this.divCaixaMenor.bind(this);
  }

  botaoCaixaMaior = (e) => {
    this.setState(prevstate => ({ estado: !prevstate.estado }))
  }

  divCaixaMenor = (valor) => {
    this.setState(prevstate => ({ caixaMaior: valor }))
  }

  render() {
    if (this.state.estado) {
      return (
        <div>
          <button className="caixaMaior" onClick={(e) => this.botaoCaixaMaior(e)}>{this.state.caixaMaior}</button>
          {this.state.listaItens.map
            (item => <div
              className="divMenor"
              key={item}
              onClick={() => this.divCaixaMenor(item)}
            >
              {item}
            </div>)}
        </div>
      );
    }

    return (
      <div>
        <button className="caixaMaior" onClick={(e) => this.botaoCaixaMaior(e)}>{this.state.caixaMaior}</button>
      </div>
    );
  }
}

export default Botao;
