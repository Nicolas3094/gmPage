import { Routes } from '@angular/router';
import { IndiceComponent } from './components/indice/indice.component';

export const routes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: IndiceComponent },
    { path: 'images', loadComponent: () => import('./components/imagenes/imagenes.component').then(mod => mod.ImagenesComponent) }
];
