import { Component, OnInit } from '@angular/core';
import { SpotifyServiceService } from '../services/spotify-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor (private spotifyService: SpotifyServiceService) { }

  ngOnInit(): void {
    this.verificarTokenCallback();
  }

  verificarTokenCallback() {
    const token = this.spotifyService.obterTokenUrlCallback();
    if(!!token){
      this.spotifyService.definirAccessToken(token);
    }
  }

  abrirPaginaLogin(): void {
    window.location.href = this.spotifyService.obterUrlLogin();
  }

}
