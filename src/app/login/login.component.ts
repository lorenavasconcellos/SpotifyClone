import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyServiceService } from '../services/spotify-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor (private spotifyService: SpotifyServiceService, private router: Router) { }

  ngOnInit(): void {
    this.verificarTokenCallback();
  }

  verificarTokenCallback() {
    const token = this.spotifyService.obterTokenUrlCallback();
    if(!!token){
      this.spotifyService.definirAccessToken(token);
      this.router.navigate(['/player']);
    }
  }

  abrirPaginaLogin(): void {
    window.location.href = this.spotifyService.obterUrlLogin();
  }

}
