import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';  // Asegúrate de que el nombre esté bien

@NgModule({
  imports: [  
    AngularFireModule.initializeApp(environment.firebaseConfig),  // Inicializa Firebase
    AngularFirestoreModule],
  exports: [AngularFireModule, AngularFirestoreModule]  // Exporta los módulos para que otros los puedan usar
})
export class FirebaseSetupModule { }
