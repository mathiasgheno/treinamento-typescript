export const Erro = ({ erro, fontSize }) => {
  return (
    <div>
      <p style={{ fontSize }}>Ocorreu um erro</p>
      <span>Erro: { erro }</span>
    </div>
  )
}