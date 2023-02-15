import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { PlayerRotas } from './player.routes';
import { PainelEsquerdoComponent } from './painel-esquerdo/painel-esquerdo.component';
import { BotaoMenuComponent } from './botao-menu/botao-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from '../home/home.component';
import { BarraSuperiorComponent } from '../home/barra-superior/barra-superior.component';
import { TopArtistaComponent } from '../home/top-artista/top-artista.component';
import { ListaMusicaComponent } from '../lista-musica/lista-musica.component';
import { BannerComponent } from '../banner/banner.component';



@NgModule({
    declarations: [
        PlayerComponent,
        PainelEsquerdoComponent,
        BotaoMenuComponent,
        HomeComponent,
        BarraSuperiorComponent,
        TopArtistaComponent,
        ListaMusicaComponent,
        BannerComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(PlayerRotas),
        FontAwesomeModule
    ]
})
export class PlayerModule { }
