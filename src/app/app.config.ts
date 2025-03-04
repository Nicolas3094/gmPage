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

export const MAIN_INDEX_LIST: Array<IndexElement> = [
  {
    index: "A.1",
    year: "©2024",
    title: "Portada de revista Ad, Gabriel Rico",
    url: "https://www.instagram.com/p/C9P-XiLOHwT/",
    type: "instagram"
  },
  {
    index: "A.2",
    year: "©2023",
    title: "The Emerald Tablet, Gabriel Rico // Premiado",
    url: "https://www.instagram.com/reel/CyOV6WvOBBh/",
    type: "instagram"
  },
  {
    index: "A.3",
    year: "©2023",
    title: "Desert Flood, Gabriel Rico",
    url: "https://www.instagram.com/reel/Cr_72qztqUd/",
    type: "instagram"
  },
  {
    index: "A.4",
    year: "©2022",
    title: "When There Were More Donkeys, Gabriel Rico",
    url: "https://www.instagram.com/reel/Cr92bB8N8XT/",
    type: "instagram"
  },
  {
    index: "A.5",
    year: "©2022",
    title: "La Inclusión de Mi Raza, Gabriel Rico",
    url: "https://www.instagram.com/reel/Cr9IKLELl5R/",
    type: "instagram"
  }
  ,
  {
    index: "B.1",
    year: "©2022 - ©2023",
    title: "Ser Fuego",
    url: "https://www.instagram.com/reel/CuBgmgdOf7q/",
    type: "instagram"
  },
  {
    index: "B.2",
    year: "©2023 - ©2024",
    title: "Cancha Interactiva",
    url: "https://www.instagram.com/reel/C5EHRlrOAbG/",
    type: "instagram"
  },
  {
    index: "B.3",
    year: "©2024",
    title: "Crisis y Resiliencia",
    url: "https://www.instagram.com/reel/C5BjJUqux4L/",
    type: "instagram"
  },
  {
    index: "C.1",
    year: "©2024",
    title: "Quiero estrellarme en seco contra el parabrisas del amor, dirigodo por Fernanda Tovar, Colectivo Colmena",
    url: "https://www.instagram.com/reel/C7xI0wnB4yW/?utm_source=ig_web_copy_link",
    keywords: "Películas y cortometrajes de ficción",
    type: "instagram"
  },
  {
    index: "C.2",
    year: "©2023",
    title: "Checo Pérez, Disney Plus, seguimiento de la temporada de Checo Pérez en la F1",
    url: "https://www.youtube.com/embed/sDznA5r8kU4",
    keywords: "Películas y cortometrajes de ficción",
    type: "youtube"
  },
  {
    index: "C.3",
    year: "©2023",
    title: "Lumbrensueño, por José Pablo Escamilla, Colectivo Colmena",
    url: "https://player.vimeo.com/video/853559280",
    keywords: "Películas y cortometrajes de ficción",
    type: "vimeo"
  },
  {
    index: "C.4",
    year: "©2022",
    title: "Mostro, por José Pablo Escamilla, Colectivo Colmena",
    url: "https://player.vimeo.com/video/582998515",
    keywords: "Películas y cortometrajes de ficción",
    type: "vimeo"
  },
  {
    index: "C.5",
    year: "©2022",
    title: "Atados los años engullen la tierra, Clemente Castor",
    url: "https://www.youtube.com/embed/Utw_kb_AQBc",
    keywords: "Películas y cortometrajes de ficción",
    type: "youtube"
  },
  {
    index: "C.6",
    year: "©2012",
    title: "El secreto del medallón de Jade, Leopoldo Aguilar y Rodolfo Guzman",
    url: "https://www.youtube.com/embed/g9S9jbme0uM",
    keywords: "Animación",
    type: "youtube"
  },
  {
    index: "C.7",
    year: "©2013",
    title: "Pantalla de Cristal por mejor diseño de audio",
    url: "https://www.revistapantalla.com/festival/ganadores/2013/peliculas.php",
    type: "web"
  },
  {
    index: "C.8",
    year: "©2008",
    title: "Fuera de control, Sofia Carrillo",
    url: "https://mubi.com/es/mx/films/out-of-control-2008",
    keywords: "Animación",
    type: "mubi"
  },
  {
    index: "C.9",
    year: "©2008",
    title: "Pantalla de Cristal por mejor diseño de audio",
    url: "https://www.revistapantalla.com/festival/ganadores/2008/ficcion.php",
    type: "web"
  },
  {
    index: "C.10",
    year: "©2012",
    title: "Mamut rescata a Flippy, One Simple Idea",
    url: "https://www.youtube.com/embed/elgT9auykMI",
    keywords: "Animación",
    type: "youtube"
  },
  {
    index: "C.11",
    year: "©2010",
    title: "Days of glory, Josue Mancilla",
    url: "https://www.youtube.com/embed/FMIZ-qxgPg8",
    keywords: "Animación",
    type: "youtube"
  },
  {
    index: "C.12",
    year: "©2024",
    title: "El Candidato Honesto, Pipe Ybarra / Videocine",
    url: "https://www.youtube.com/embed/ZtwywjeCfLQ",
    keywords: "Mezcla eb 5.1 de trailers",
    type: "youtube"
  },
  {
    index: "C.13",
    year: "©2024",
    title: "Familia Nacional, por Marcelo Alejandro Tobar de Albornoz, Videocine",
    url: "https://www.youtube.com/embed/CC-QnYx0E98",
    keywords: "Mezcla eb 5.1 de trailers",
    type: "youtube"
  },
  {
    index: "C.14",
    year: "©2023",
    title: "Noche de Bodas, por Osvaldo Benavides, Videocine",
    url: "https://www.youtube.com/embed/g4BLH8sHIFo",
    keywords: "Mezcla eb 5.1 de trailers",
    type: "youtube"
  },
  {
    index: "C.15",
    year: "©2023",
    title: "Radical, por Christopher Zalla, Videocine",
    url: "https://www.youtube.com/embed/4CpKulS9h88",
    keywords: "Mezcla eb 5.1 de trailers",
    type: "youtube"
  },
  {
    index: "C.16",
    year: "©2023",
    title: "Sobreviviendo a mis XV, Chava Cartas, Videocine",
    url: "https://www.youtube.com/embed/j3VsLAuVpb8",
    keywords: "Mezcla eb 5.1 de trailers",
    type: "youtube"
  },
  {
    index: "C.17",
    year: "©2023",
    title: "Papá o Mamá, por Ernesto Contreras, Videocine",
    url: "https://www.youtube.com/embed/aXxvw4CLSH4",
    keywords: "Mezcla eb 5.1 de trailers",
    type: "youtube"
  },
  {
    index: "C.18",
    year: "©2022",
    title: "Malvada, por J.M Cravioto, Videocine",
    url: "https://www.youtube.com/embed/qI1MAr0q89E",
    keywords: "Mezcla eb 5.1 de trailers",
    type: "youtube"
  },
  {
    index: "D.1",
    year: "©2023",
    title: "Floating with spirits, por Juanita Onzaga",
    url: "https://www.youtube.com/embed/RpxViBRU2O4",
    type: "youtube"
  },
  {
    index: "D.2",
    year: "©2023",
    title: "Miguel Bosé, MTV Unplugged 360",
    url: "https://www.facebook.com/mtvla/videos/10154509330958070",
    type: "facebook"
  },
  {
    index: "D.3",
    year: "©2023",
    title: "Murmullos de la frontera, Documental sobre la migración en Centroamérica",
    url: "https://www.youtube.com/embed/X9v7wG8SzF4",
    type: "youtube"
  },
  {
    index: "D.4",
    year: "©2023",
    title: "COSTA CANUVA, VIDEO 360 PARA DESARROLLO ARQUITECTÓNICO",
    url: "https://www.youtube.com/embed/-vRXv1zhy00",
    type: "youtube"
  },
  {
    index: "D.5",
    year: "©2023",
    title: "GIARDINO, VIDEO 360 PARA SPA EN SUIZA",
    url: "https://www.youtube.com/embed/2ezITLyqnhI",
    type: "youtube"
  },
  {
    index: "D.6",
    year: "©2023",
    title: "Avenir, VIDEO 360 PARA INMOBILIARIA",
    url: "https://www.youtube.com/embed/rJj2wFJHn-Q",
    type: "youtube"
  }
]