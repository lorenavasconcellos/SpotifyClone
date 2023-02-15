import { Component, OnDestroy, OnInit } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { PlayerService } from 'src/app/services/player.service';
import { newTrack } from '../Common/factories';
import { ITrack } from '../Interfaces/ITrack';
import { SpotifyServiceService } from '../services/spotify-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  musicas: ITrack[] = []
  musicaAtual: ITrack = newTrack();

  subs: Subscription[] = [];

  // IconePlay
  playIcone = faPlay;

  constructor(
    private spotifyService: SpotifyServiceService,
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.obterMusicas();
    this.obterMusicaAtual();
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  async obterMusicas() {
    this.musicas = await this.spotifyService.buscarMusicas()
  }

  obterMusicaAtual(){
    const sub = this.playerService.musicaAtual.subscribe(musica => {
      this.musicaAtual = musica;
    });

    this.subs.push(sub);
  }

  obterArtistas(musica: ITrack){
    return musica.artistas.map(artista => artista.nome).join(', ');
  }

  async executarMusica(musica: ITrack){
    await this.spotifyService.executarMusica(musica.id);
    this.playerService.definirMusicaAtual(musica);
  }
  
}