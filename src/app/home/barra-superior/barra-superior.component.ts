import { Component, OnInit } from '@angular/core';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { IUsuario } from 'src/app/Interfaces/IUsuario';
import { SpotifyServiceService } from 'src/app/services/spotify-service.service';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.scss']
})
export class BarraSuperiorComponent implements OnInit{

  sairIcon = faSignOut;
  usuario: IUsuario = null;

  constructor(private SpotifyService: SpotifyServiceService) { }

  ngOnInit(): void {
    this.usuario = this.SpotifyService.usuario;
  }

  logout() {
    this.SpotifyService.logout();
  }

}
