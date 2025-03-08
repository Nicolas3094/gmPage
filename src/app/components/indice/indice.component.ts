import {  Component, OnDestroy, OnInit } from '@angular/core';
import { IndexElement } from '../../models/index-element.model';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { OverlayVideoComponent } from '../overlay-video/overlay-video.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { FirebaseSetupModule } from '../../firebase-setup/firebase-setup.module';

@Component({
  standalone: true,
  selector: 'app-indice',
  imports: [FirebaseSetupModule, NgFor, NgIf, OverlayVideoComponent, AsyncPipe],
  templateUrl: './indice.component.html'
})
export class IndiceComponent {
  popup: boolean = false;

  elementsList?: Array<IndexElement>;

  currentIndexElement?: IndexElement;

  observable$?: Observable<Array<IndexElement>>;

  constructor(private firestore: AngularFirestore) {
    this.observable$ = this.firestore.collection('indexElements').valueChanges().pipe(
      map(obj => obj.map(element => element as IndexElement).sort((a,b) => b.order < a.order ? 1 : -1) as Array<IndexElement>)
    );
   }

  

  handleButtoIndex(indexElement: IndexElement) {
    console.log(indexElement.index);
    this.currentIndexElement = indexElement;
    switch (indexElement.type) {
      case "vimeo":
      case "youtube":
        this.popup = true;
        break;
      default:
        window.open(indexElement.url, "_blanks");
    }
  }

  close() {
    this.popup = false;
    this.currentIndexElement = undefined;
  }
}
