import { Component, OnInit } from '@angular/core';
import { faHome, faSearch, faBook, faPlus, faHeart, faMusic } from '@fortawesome/free-solid-svg-icons';
import { IPlaylist } from 'src/app/Interfaces/IPlaylist';
import { SpotifyServiceService } from 'src/app/services/spotify-service.service';

@Component({
  selector: 'app-painel-esquerdo',
  templateUrl: './painel-esquerdo.component.html',
  styleUrls: ['./painel-esquerdo.component.scss']
})
export class PainelEsquerdoComponent implements OnInit {

  playlists: IPlaylist[] = [];

  //Icones
  homeIcon = faHome;
  searchIcon = faSearch;
  booksIcon = faBook;
  plusIcon = faPlus;
  heartIcon = faHeart;
  playlistIcon = faMusic;

  constructor(private spotifyService: SpotifyServiceService) {}

  ngOnInit(): void {
    this.buscarPlaylists();
  }

  async buscarPlaylists() {
    this.playlists = await this.spotifyService.buscarPlaylistUsuario();
  }

}
