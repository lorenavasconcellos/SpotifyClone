import { Component, Input, OnInit } from '@angular/core';
import { newPlaylist } from '../Common/factories';
import { IPlaylist } from '../Interfaces/IPlaylist';
import { ITrack } from '../Interfaces/ITrack';
import { SpotifyServiceService } from '../services/spotify-service.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  playlist: IPlaylist = newPlaylist();

  @Input()
  ImagemUrl = '';
  
  @Input()
  Text = '';

  bannerImagemUrl = ''; 
  bannerTexto = '';

  constructor(private SpotifyService: SpotifyServiceService) { }

  ngOnInit(): void {
    
  }

  async obterDadosPagina(tipo: string, id: string){
    if(tipo === 'playlist')
      await this.obterDadosPlaylist(id);
  }

  async obterDadosPlaylist(playlistId: string){
    const playlistMusicas = await this.SpotifyService.buscarMusicasPlaylist(playlistId);
    this.definirDadosPagina(playlistMusicas.nome, this.playlist.imagemUrl, playlistMusicas.musicas);
  }

  definirDadosPagina(bannerTexto: string, bannerImagemUrl: string, musicas: ITrack[]){
    this.bannerImagemUrl = this.playlist.imagemUrl;
    this.bannerTexto = bannerTexto;
  }

}