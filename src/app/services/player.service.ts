import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { newTrack } from '../Common/factories';
import { ITrack } from '../Interfaces/ITrack';
import { SpotifyServiceService } from './spotify-service.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  musicaAtual = new BehaviorSubject<ITrack>(newTrack());
  timerId: any = null;

  constructor(private spotifyService: SpotifyServiceService) {
    this.obterMusicaAtual();
  }

  async obterMusicaAtual(){
    clearTimeout(this.timerId);

    // Obtenho a musica
    const musica = await this.spotifyService.obterMusicaAtual();
    this.definirMusicaAtual(musica);

    // Causo loop
    this.timerId = setInterval(async () => {
      await this.obterMusicaAtual();
    }, 5000)
  }

  definirMusicaAtual(musica: ITrack){
    this.musicaAtual.next(musica);
  }

  async voltarMusica(){
    await this.spotifyService.voltarMusica();
  }

  async proximaMusica() {
    await this.spotifyService.proximaMusica();
  }
}