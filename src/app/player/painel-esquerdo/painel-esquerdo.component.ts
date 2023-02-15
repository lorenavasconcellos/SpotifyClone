import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome, faSearch, faBook, faPlus, faHeart, faMusic } from '@fortawesome/free-solid-svg-icons';
import { IPlaylist } from 'src/app/Interfaces/IPlaylist';
import { SpotifyServiceService } from 'src/app/services/spotify-service.service';

@Component({
  selector: 'app-painel-esquerdo',
  templateUrl: './painel-esquerdo.component.html',
  styleUrls: ['./painel-esquerdo.component.scss']
})
export class PainelEsquerdoComponent implements OnInit {

  menuSelecionado = 'Início'

  playlists: IPlaylist[] = [];

  //Icones
  homeIcon = faHome;
  searchIcon = faSearch;
  booksIcon = faBook;
  plusIcon = faPlus;
  heartIcon = faHeart;
  playlistIcon = faMusic;

  constructor(private spotifyService: SpotifyServiceService, private router: Router) {}

  ngOnInit(): void {
    this.buscarPlaylists();
  }

  async buscarPlaylists() {
    this.playlists = await this.spotifyService.buscarPlaylistUsuario();
  }

  botaoClick(botao: string) {
    this.menuSelecionado = botao;
    this.router.navigateByUrl('player/home');
  }

  irParaPlaylist(playlistId: string){
    this.menuSelecionado = playlistId;
    this.router.navigateByUrl(`player/lista/playlist/${playlistId}`)
  }

}
