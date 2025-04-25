import { inject, Injectable } from '@angular/core';
import { getDownloadURL, ref, Storage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireStorageRepository {

  private storage = inject(Storage);

  // Obtener URL de descarga desde una referencia
  getDownloadUrl(refPath: string): Observable<string> {
    if(!refPath.includes("png") && !refPath.includes("jpg") && !refPath.includes("jpeg")){
      refPath = `${refPath}.png`;
    }
    const storageRef = ref(this.storage, refPath);
    return new Observable<string>(observer => {
      getDownloadURL(storageRef)
        .then(url => {
          observer.next(url);
          observer.complete();
        })
        .catch(error => observer.error(error));
    });
  }
}
