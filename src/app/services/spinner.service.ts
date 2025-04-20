import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

    private isDataLoadedSubject = new BehaviorSubject<boolean>(false);
    private isFooterDataLoadedSubject = new BehaviorSubject<boolean>(false);
    private isHeaderDataLoadedSubject = new BehaviorSubject<boolean>(false);


    emitLoadedDta(payload : boolean){
      this.isDataLoadedSubject.next(payload);
    }

    emitHeaderLoadedDta(payload : boolean){
      this.isHeaderDataLoadedSubject.next(payload);
    }

    emitFooterLoadedDta(payload : boolean){
      this.isFooterDataLoadedSubject.next(payload);
    }

    get showSpinner$() {
      return combineLatest([
        this.isDataLoadedSubject.asObservable(),
        this.isFooterDataLoadedSubject.asObservable(),
        this.isHeaderDataLoadedSubject.asObservable()
      ]).pipe(
        map(([dataLoaded, footerData, headerData]) => !(footerData && dataLoaded && headerData))
      );
    }

}
