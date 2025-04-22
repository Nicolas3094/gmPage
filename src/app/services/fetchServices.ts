import { IRepository } from "../repositories/irepository.interface";
import { firstValueFrom, Observable } from "rxjs";

export abstract class FetchService <T> {
    
    private fetchedObjects?: T[];
    private fetchedObject?: T;

    constructor(private repository: IRepository<T>){}

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
        if(this.fetchedObject == undefined) {
            console.log("is undefined");
            this.fetchedObject = await firstValueFrom(this.repository.getSingle());
        }
        return this.fetchedObject;
    }

    async fetchAll(): Promise<T[]> {
        if (this.fetchedObjects == undefined) {
            this.fetchedObjects = await this.repository.fecthAll();
        }
        return this.fetchedObjects;
    }

    getList() : T[] {
        return this.fetchedObjects!;
    }

    getData() : T {
        return this.fetchedObject!;
    }
}