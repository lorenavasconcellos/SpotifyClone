import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyServiceService } from '../services/spotify-service.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticadoGuard implements CanLoad {

  constructor(private router: Router, private spotifyService: SpotifyServiceService) {

  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = localStorage.getItem('token');

    if(!token) {
      return this.naoAutenticado();
    }

    return new Promise((res) => {
      const usuarioCriado = this.spotifyService.inicializarUsuario();

      if (usuarioCriado)
        res(true);
      else
        res(this.naoAutenticado());
    })

    return true;
  }

  naoAutenticado() {
    localStorage.clear();
    this.router.navigate(['/login']);
    return false;
  }
}
