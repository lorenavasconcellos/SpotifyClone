import { Component } from '@angular/core';
import { SpotifyServiceService } from '../services/spotify-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor (private SpotifyService: SpotifyServiceService) { }

  abrirPaginaLogin() {
    window.location.href = this.SpotifyService.obterUrlLogin();
  }

}
