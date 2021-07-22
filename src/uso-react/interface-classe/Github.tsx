import {Component, ChangeEventHandler, ChangeEvent} from 'react';
import { buscarUsuario } from '../service/github.service';

interface IDados {
  login: string
}

interface IState {
  usuario: string,
  dados:  IDados | null,
}

export class Github extends Component<unknown, IState> {
  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      dados: null,
    }
  }

  handleUsuarioChanges = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    this.setState({ usuario: event.target.value })
  }

  handleBuscar = () => {
    buscarUsuario(this.state.usuario)
      .then(dados => this.setState({ dados }));
  }

  render() {
    return (
      <div>
        <p>Github User</p>
        <label htmlFor="usuario">Usuario:</label>
        <input
          type="text"
          name="usuaraio"
          onChange={this.handleUsuarioChanges}
          value={this.state.usuario}
        />
        <button onClick={this.handleBuscar}>Buscar</button>

        {this.state.dados && <p>Login: {this.state.dados.login}</p>}
      </div>
    );
  }
}