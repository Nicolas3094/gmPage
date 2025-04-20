import { inject, Injectable } from '@angular/core';
import { doc, DocumentData, Firestore, getDoc } from '@angular/fire/firestore';
import { Linkinfo } from '../models/linkinfo.model';

@Injectable({
  providedIn: 'root'
})
export class LinkInfoService {

  private readonly name = 'links';

  private firestore = inject(Firestore);

  private readonly linkInfoConverter = {
    toFirestore(link: Linkinfo): DocumentData {
      return {
        title: link.title,
        url: link.url
      };
    },
    fromFirestore(snapshot: any, options: any): Linkinfo {
      const data = snapshot.data(options);
      return {
        title: data.title,
        url: data.url
      };
    }
  };

  async getByDocumentId(docId: string): Promise<Linkinfo> { 
    const documentRef = doc(this.firestore, this.name + "/" + docId).withConverter(this.linkInfoConverter);
    const document = await getDoc(documentRef);

    if (document.exists()) {
      return document.data();
    }

    throw Error("No existe documento.");
  }

}
