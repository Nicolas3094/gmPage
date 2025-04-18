import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HeaderInfo } from './models/header-info.model';
import { FooterInfo } from './models/footer-info.model';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // Configuración de Firebase
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    // Configuración de Firestore (¡Este es el provider que falta!)
    provideFirestore(() => getFirestore())]
};