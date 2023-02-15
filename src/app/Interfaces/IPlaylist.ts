import { ITrack } from "./ITrack"

export interface IPlaylist {
    id: string,
    nome: string,
    imagemUrl: string
    musicas?: ITrack[]
}