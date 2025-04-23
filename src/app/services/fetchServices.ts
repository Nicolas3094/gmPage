import { IRepository } from "../repositories/irepository.interface";
import { BehaviorSubject, filter, firstValueFrom, Observable, shareReplay, take } from "rxjs";

export abstract class FetchService <T> {
    
    private _list$ = new BehaviorSubject<T[] | undefined>(undefined);
    private _data$ = new BehaviorSubject<T | undefined >(undefined);

    constructor(private repository: IRepository<T>){}

    // Métodos observables que exponen el estado
    get list$(): Observable<T[]> {
        return this._list$.asObservable()
        .pipe(
            filter(value=>value!=undefined),
            shareReplay(1) // Para evitar múltiples suscripciones
        );
    }

    get data$(): Observable<T> {
        return this._data$.asObservable().pipe(
            filter(value=>value!=undefined),
            shareReplay(1) // Para evitar múltiples suscripciones
        );
    }

    getAll(): Observable<T[]> {
        return this.repository.getCollection();
    }

    getFirst(): Observable<T> {
        return this.repository.getSingle()
    }

    getById(id: string): Promise<T> {
        return this, this.repository.getByDocumentId(id);
    }

    async fetch() : Promise<T> {
        if(this._data$.value === undefined) {
            const data = await firstValueFrom(this.repository.getSingle());
            this._data$.next(data);
        }
        return this._data$.value!;
    }

    async fetchAll(): Promise<T[]> {
        if (this._list$.value === undefined) {
            const dataArray = await this.repository.fecthAll();
            this._list$.next(dataArray);
        }
        return this._list$.value!;
    }
}