import { Routes } from '@angular/router';
import { IndiceComponent } from './components/indice/indice.component';
import { PrivacyComponent } from './components/privacy/privacy.component';

export const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: IndiceComponent },
    { path: 'privacy', component: PrivacyComponent },
    { path: '**', redirectTo: "index" },
];
