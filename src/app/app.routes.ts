import { Routes } from '@angular/router';
import { IndiceComponent } from './components/indice/indice.component';

export const routes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: IndiceComponent },
    { path: 'privacy', loadComponent: () => import('./components/privacy/privacy.component').then(mod => mod.PrivacyComponent) },
    { path: 'images', loadComponent: () => import('./components/imagenes/imagenes.component').then(mod => mod.ImagenesComponent) }
];
