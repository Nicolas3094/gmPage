import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { YoutubeVideo } from './models/youtube-video.model';
import { HeaderInfo } from './models/header-info.model';
import { FooterInfo } from './models/footer-info.model';
import { IndexElement } from './models/index-element.model';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};

export const youtubeVideos: Array<YoutubeVideo> = [
  { title: 'Video de YouTube 1', url: 'https://www.youtube.com/embed/example1' },
  { title: 'Video de Instagram 1', url: 'https://www.instagram.com/p/example1/embed/' }
];


export const HEADER: HeaderInfo = {
  detalles: ["G.M. ART NEW MEDIA", "CREACIÓN MULTIDICIPLINARIA"],
  listado: ["(A) REALIDAD AUMENTADA",
    "(B) INSTALACIONES INTERACTIVAS",
    "(C) MÚSICA, DISEÑO DE SONIDO Y MEZCLA 5.1",
    "(D) REALIDAD VIRTUAL"
  ],
  menu: ["ÍNDICE", "IMGÁGENES"],
  logo: ""
};

export const FOOTER: FooterInfo = {
  aliados: [
    {
      title: "ALIADOS"
    },
    { url: "https://rawfx.com.mx/", title: "RAW FX" }, { title: "SPLENDOR OMNIA", url: "https://splendoromnia.com/es/" }],
  clientes: {
    title: "CLIENTES",
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
    contact: [{ title: "CONTACTAR", url: "https://mail.google.com/mail/?view=cm&fs=1&to=gmartnewmedia@gmail.com" }, { title: "INSTAGRAM", url: "https://www.instagram.com/gmartnewmedia/" }],
    description: "Somos una organización pionera que fusiona arte y tecnología para crear experiencias únicas en un contexto social. Nos enfocamos en brindar servicios de alta calidad con tecnología de punta y conceptos creativos para clientes que buscan lo extraordinario." +
      "En GM Art New Media, creemos que la tecnología es una herramienta poderosa para potenciar el arte y la creatividad. Especializados en proyectos que combinan tecnología avanzada con arte, diseño y narrativa, generamos experiencias inmersivas e inolvidables. Desde instalaciones interactivas hasta exhibiciones de realidad aumentada, nos comprometemos a entregar soluciones personalizadas para cada proyecto." +
      "Nuestro equipo de expertos en tecnología y creativos aborda cada proyecto desde múltiples perspectivas para ofrecer soluciones innovadoras y efectivas. Trabajamos en estrecha colaboración con nuestros clientes para entender sus necesidades y objetivos, y así diseñar experiencias a la medida."
  }
}