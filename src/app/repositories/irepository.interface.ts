import { Observable } from "rxjs";

export interface IRepository<T> {
    getCollection(): Observable<T[]>;
    getSingle() : Observable<T>;
    getByDocumentId(id:string) : Promise<T>;
    fecthAll() : Promise<T[]>;
}