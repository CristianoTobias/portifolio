import { Titulo as TituloEstilo } from './style'
export type Props = {
  children: string
  fontSize?: number
}

const Titulo = (props: Props) => {
  return <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>
}

export default Titulo
