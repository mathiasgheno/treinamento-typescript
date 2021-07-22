//@ts-nocheck
import { Component } from "react";

export class Erro extends Component {
  render() {
    return (
      <div>
        <p>Ocorreu um erro</p>
        <span>Erro: {this.props.erro}</span>
      </div>
    );
  }
}