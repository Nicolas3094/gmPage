import { Injectable } from '@angular/core';
import { HeaderInfo } from '../models/header-info.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private readonly HEADER: HeaderInfo = {
    videoPlayBack: "https://firebasestorage.googleapis.com/v0/b/gmapp-f6d70.firebasestorage.app/o/videoplayback_1.mp4?alt=media&token=993e343b-cdb0-4a74-8cf4-9b29521f4677",
    detalles: ["G.M. ART NEW MEDIA", "MULTIDISCIPLINARY CREATION"],
    listado: ["(A) Augmented Reality",
      "(B) Interactive Installations",
      "(C) Music, Sound Design, and 5.1 Mixing",
      "(D) Virtual Reality"
    ],
    menu: [
      { title: "gmartnewmedia@gmail.com", url: "https://mail.google.com/mail/?view=cm&fs=1&to=gmartnewmedia@gmail.com" },
      { title: "@gmartnewmedia", url: "https://www.instagram.com/gmartnewmedia/" },
      { title: "+52 33 1133 6736", url: "https://w.app/rnmeh6" }],

    logo: ""
  };

  getHeaderInfo(): HeaderInfo {
    return this.HEADER;
  }

}
