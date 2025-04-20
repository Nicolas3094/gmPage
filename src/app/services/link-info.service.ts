import { inject, Injectable } from '@angular/core';
import { doc, DocumentData, Firestore, getDoc } from '@angular/fire/firestore';
import { Linkinfo } from '../models/linkinfo.model';
import { FiredataService } from './firedata.service';

@Injectable({
  providedIn: 'root'
})
export class LinkInfoService extends FiredataService<Linkinfo, Linkinfo> {
  constructor(){
    super("links");
  }
}
