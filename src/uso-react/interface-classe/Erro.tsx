//@ts-nocheck
import { Component } from "react";

interface IProps {
  erro: string,
}

export class Erro extends Component<IProps> {
  render() {
    return (
      <div>
        <p>Ocorreu um erro</p>
        <span>Erro: {this.props.erro}</span>
      </div>
    );
  }
}