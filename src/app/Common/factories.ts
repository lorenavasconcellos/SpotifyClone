import { IArtista } from "../Interfaces/IArtista";
import { IPlaylist } from "../Interfaces/IPlaylist";
import { ITrack } from "../Interfaces/ITrack";

export function newArtista(): IArtista {
  return {
    id: '',
    imagemUrl: '',
    nome: '',
    musicas: []
  };
}

export function newTrack(): ITrack {
  return {
    id: '',
    album: {
      id: '',
      imagemUrl: '',
      nome: '',
    },
    artistas: [],
    tempo: '',
    titulo: ''
  }
}

export function newPlaylist(): IPlaylist {
  return {
    id: '',
    imagemUrl: '',
    nome: '',
    musicas: []
  }
}