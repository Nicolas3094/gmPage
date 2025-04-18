import { Injectable } from '@angular/core';
import { FooterInfo } from '../models/footer-info.model';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  private readonly FOOTER: FooterInfo = {
    clientes: {
      title: "CLIENTS",
      clients:
        [{ title: "OMR", url: "https://firebasestorage.googleapis.com/v0/b/gmapp-f6d70.firebasestorage.app/o/omr.png?alt=media&token=808b4d51-8238-44b8-a889-aa5c3cdf8c18" },
        { title: "MUSEO CABAÑAS", url: "https://firebasestorage.googleapis.com/v0/b/gmapp-f6d70.firebasestorage.app/o/museoCabanas.png?alt=media&token=b14205bd-b445-42ce-b155-42c5e7f8ff3d" },
        { title: "AMBULANTE", url: "https://firebasestorage.googleapis.com/v0/b/gmapp-f6d70.firebasestorage.app/o/ambulante.png?alt=media&token=f7f6b1b3-3bc8-4c3c-805b-8634d7a5d019" },
        { title: "JALISCO - GOBIERNO DEL ESTADO", url: "https://firebasestorage.googleapis.com/v0/b/gmapp-f6d70.firebasestorage.app/o/jaliscoGob.png?alt=media&token=e0c0df65-9848-44cc-8278-b895d62cc4be" },
        { title: "CENTRO CULTURAL DIGITAL", url: "https://firebasestorage.googleapis.com/v0/b/gmapp-f6d70.firebasestorage.app/o/centroCulturalDigital.png?alt=media&token=c423fe75-a7b6-497b-8411-b6a7ca0dbcdd" },
        { title: "LAGO ALGO", url: "https://firebasestorage.googleapis.com/v0/b/gmapp-f6d70.firebasestorage.app/o/lagoAlgo.png?alt=media&token=36b05b05-3d59-4e57-8931-60b5e2c9b69a" },
        { title: "BLACK CUBE NOMADIC ART MUSEUM", url: "https://firebasestorage.googleapis.com/v0/b/gmapp-f6d70.firebasestorage.app/o/blackCubeNomadicArt.png?alt=media&token=10071a09-3f6f-4383-baaf-6e19b24f9132" },
        { title: "MUSEO MEMORIA Y TOLERANCIA", url: "https://firebasestorage.googleapis.com/v0/b/gmapp-f6d70.firebasestorage.app/o/museoMemoriaTolerancia.png?alt=media&token=5225cc4e-b992-420c-b8c8-52bf311412ff" },
        { title: "FICUNAM", url: "https://firebasestorage.googleapis.com/v0/b/gmapp-f6d70.firebasestorage.app/o/ficunam.png?alt=media&token=2c977ebf-3129-498c-b67c-d06e9770a0a7" },
        { title: "ITESO - UNIVERSIDAD JESUITA DE GUADALAJARA", url: "https://firebasestorage.googleapis.com/v0/b/gmapp-f6d70.firebasestorage.app/o/iteso.png?alt=media&token=bcbf6b86-3e05-4da3-92a5-dcd4387cc080" },
        { title: "LIVERPOOL", url: "https://firebasestorage.googleapis.com/v0/b/gmapp-f6d70.firebasestorage.app/o/liverpool.png?alt=media&token=e0cda087-0668-4841-9024-a572c3d671d8" },
        { title: "TELCEL", url: "https://firebasestorage.googleapis.com/v0/b/gmapp-f6d70.firebasestorage.app/o/telcel.png?alt=media&token=4249b076-0944-484b-a113-719f0f1ec017" },
        { title: "REVISTA AO", url: "https://firebasestorage.googleapis.com/v0/b/gmapp-f6d70.firebasestorage.app/o/revistaAo.png?alt=media&token=788d7b8f-f796-4030-be9c-3851e3c1e6b2" },
        { title: "IDENTO", url: "https://firebasestorage.googleapis.com/v0/b/gmapp-f6d70.firebasestorage.app/o/idento.png?alt=media&token=73c2034e-7e93-42bb-8d52-2189d5270029" },
        { title: "COLMENA", url: "https://firebasestorage.googleapis.com/v0/b/gmapp-f6d70.firebasestorage.app/o/colMena.png?alt=media&token=a6e57577-756a-4211-9f78-16f5a307b881" },
        { title: "GABRIEL RICO STUDIO", url: "https://firebasestorage.googleapis.com/v0/b/gmapp-f6d70.firebasestorage.app/o/gabrielRicoStudio.png?alt=media&token=25e2e08b-8d5f-4607-90aa-9258895c4726" }]
    },
    nosotros: {
      title: "G.M. ART NEW MEDIA",
      contact: [
        { title: "gmartnewmedia@gmail.com", url: "https://mail.google.com/mail/?view=cm&fs=1&to=gmartnewmedia@gmail.com" },
        { title: "@gmartnewmedia", url: "https://www.instagram.com/gmartnewmedia/" },
        { title: "+52 33 1133 6736", url: "https://w.app/rnmeh6" }],
      descriptions: ["We are a pioneering organization that merges art and technology to create unique experiences in a social context. We focus on delivering high-quality services with cutting-edge technology and creative concepts for clients seeking the extraordinary.",
        "At GM Art New Media, we believe technology is a powerful tool to enhance art and creativity. Specializing in projects that combine advanced technology with art, design, and storytelling, we generate immersive and unforgettable experiences,  we are committed to delivering customized solutions for every project.",
        "Our team of technology experts and creatives approaches each project from multiple perspectives to offer innovative and effective solutions. We work closely with our clients to understand their needs and objectives, designing tailor-made experiences."]
    }
  };


  getFooterInfo(): FooterInfo {
    return this.FOOTER;
  }

}
