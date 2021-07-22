import { FC } from "react";

type Tamanho = 'px' | '%';
type FontZise = `${number}${Tamanho}`;

interface IProps {
  erro: string,
  fontSize: FontZise,
}


export const Erro: FC<IProps> = ({ erro, fontSize }) => {
  return (
    <div>
      <p style={{ fontSize }}>Ocorreu um erro</p>
      <span>Erro: { erro }</span>
    </div>
  )
}