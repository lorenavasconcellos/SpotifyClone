import { ITrack } from "./ITrack";

export interface IArtista {
  id: string,
  nome: string,
  imagemUrl: string,
  musicas?: ITrack[]
}