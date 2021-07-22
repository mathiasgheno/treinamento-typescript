import {FC} from 'react';

interface IProps {
  erro: string,
}

export const Erro: FC<IProps> = (props ) => {
  return (
    <div>
      <p>Ocorreu um erro</p>
      <span>Erro: { props.erro }</span>
    </div>
  )
}