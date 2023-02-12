import { Routes } from "@angular/router";
import { AutenticadoGuard } from "./guards/autenticado.guard";

export const AppRotas: Routes = [
    {
        path: '',
        redirectTo: 'player',
        pathMatch: 'full'
    },
    {
        path: 'player',
        loadChildren: () => import('./player/player.module').then(x => x.PlayerModule),
        canLoad: [AutenticadoGuard]
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(x => x.LoginModule)
    }
]