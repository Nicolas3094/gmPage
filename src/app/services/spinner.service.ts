import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

    private isVideoLoadedSubject = new BehaviorSubject<boolean>(false);
    private isDataLoadedSubject = new BehaviorSubject<boolean>(false);

    emitLoadedVideo(payload : boolean){
      this.isVideoLoadedSubject.next(payload);
    }

    emitLoadedDta(payload : boolean){
      this.isDataLoadedSubject.next(payload);
    }

    get showSpinner$() {
      return combineLatest([
        this.isVideoLoadedSubject.asObservable(),
        this.isVideoLoadedSubject.asObservable()
      ]).pipe(
        map(([videoLoaded, dataLoaded]) => !(videoLoaded && dataLoaded))
      );
    }

}
