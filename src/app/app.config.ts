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
      [{ title: "OMR", url: "/brands/omr.png" },
      { title: "MUSEO CABAÑAS", url: "/brands/museoCabanas.png" },
      { title: "AMBULANTE", url: "/brands/ambulante.png" },
      { title: "JALISCO - GOBIERNO DEL ESTADO", url: "/brands/jaliscoGob.png" },
      { title: "CENTRO CULTURAL DIGITAL", url: "/brands/centroCulturalDigital.png" },
      { title: "LAGO ALGO", url: "/brands/lagoAlgo.png" },
      { title: "BLACK CUBE NOMADIC ART MUSEUM", url: "/brands/blackCubeNomadicArt.png" },
      { title: "MUSEO MEMORIA Y TOLERANCIA", url: "/brands/museoMemoriaTolerancia.png" },
      { title: "FICUNAM", url: "/brands/ficunam.png" },
      { title: "ITESO - UNIVERSIDAD JESUITA DE GUADALAJARA", url: "/brands/iteso.png" },
      { title: "LIVERPOOL", url: "/brands/liverpool.png" },
      { title: "TELCEL", url: "/brands/telcel.png" },
      { title: "REVISTA AO", url: "/brands/revistaAo.png" },
      { title: "IDENTO", url: "/brands/idento.png" },
      { title: "COLMENA", url: "/brands/colMena.png" },
      { title: "GABRIEL RICO STUDIO", url: "/brands/gabrielRicoStudio.png" }]
  },
  nosotros: {
    title: "G.M. ART NEW MEDIA",
    contact: [{ title: "CONTACTAR", url: "" }, { title: "INSTAGRAM", url: "" }],
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
    url: "https://www.youtube.com/watch?v=sDznA5r8kU4&ab_channel=StarLatinoam%C3%A9rica",
    keywords: "Películas y cortometrajes de ficción",
    type: "youtube"
  },
  {
    index: "C.3",
    year: "©2023",
    title: "Lumbrensueño, por José Pablo Escamilla, Colectivo Colmena",
    url: "https://vimeo.com/853559280",
    keywords: "Películas y cortometrajes de ficción",
    type: "vimeo"
  },
  {
    index: "C.4",
    year: "©2022",
    title: "Mostro, por José Pablo Escamilla, Colectivo Colmena",
    url: "https://vimeo.com/582998515",
    keywords: "Películas y cortometrajes de ficción",
    type: "vimeo"
  },
  {
    index: "C.5",
    year: "©2022",
    title: "Atados los años engullen la tierra, Clemente Castor",
    url: "https://www.youtube.com/watch?v=Utw_kb_AQBc&ab_channel=Sal%C3%B3ndeBellezaICine",
    keywords: "Películas y cortometrajes de ficción",
    type: "youtube"
  },
  {
    index: "C.6",
    year: "©2012",
    title: "El secreto del medallón de Jade, Leopoldo Aguilar y Rodolfo Guzman",
    url: "https://www.youtube.com/watch?v=g9S9jbme0uM",
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
    url: "https://www.youtube.com/watch?v=elgT9auykMI&ab_channel=GerardoMart%C3%ADnezAngeles",
    keywords: "Animación",
    type: "youtube"
  },
  {
    index: "C.11",
    year: "©2010",
    title: "Days of glory, Josue Mancilla",
    url: "https://www.youtube.com/watch?v=FMIZ-qxgPg8&ab_channel=GerardoMart%C3%ADnezAngeles",
    keywords: "Animación",
    type: "youtube"
  },
  {
    index: "C.12",
    year: "©2024",
    title: "El Candidato Honesto, Pipe Ybarra / Videocine",
    url: "https://www.youtube.com/watch?v=ZtwywjeCfLQ&ab_channel=Videocine",
    keywords: "Mezcla eb 5.1 de trailers",
    type: "youtube"
  },
  {
    index: "C.13",
    year: "©2024",
    title: "Familia Nacional, por Marcelo Alejandro Tobar de Albornoz, Videocine",
    url: "https://www.youtube.com/watch?v=CC-QnYx0E98&ab_channel=Videocine",
    keywords: "Mezcla eb 5.1 de trailers",
    type: "youtube"
  },
  {
    index: "C.14",
    year: "©2023",
    title: "Noche de Bodas, por Osvaldo Benavides, Videocine",
    url: "https://www.youtube.com/watch?v=g4BLH8sHIFo&t=5s&ab_channel=Videocine",
    keywords: "Mezcla eb 5.1 de trailers",
    type: "youtube"
  },
  {
    index: "C.14",
    year: "©2023",
    title: "Radical, por Christopher Zalla, Videocine",
    url: "https://www.youtube.com/watch?v=4CpKulS9h88&ab_channel=Videocine",
    keywords: "Mezcla eb 5.1 de trailers",
    type: "youtube"
  },
  {
    index: "C.15",
    year: "©2023",
    title: "Sobreviviendo a mis XV, Chava Cartas, Videocine",
    url: "https://www.youtube.com/watch?v=j3VsLAuVpb8&t=47s&ab_channel=Videocine",
    keywords: "Mezcla eb 5.1 de trailers",
    type: "youtube"
  },
  {
    index: "C.16",
    year: "©2023",
    title: "Papá o Mamá, por Ernesto Contreras, Videocine",
    url: "https://www.youtube.com/watch?v=aXxvw4CLSH4&ab_channel=Videocine",
    keywords: "Mezcla eb 5.1 de trailers",
    type: "youtube"
  },
  {
    index: "C.17",
    year: "©2022",
    title: "Malvada, por J.M Cravioto, Videocine",
    url: "https://www.youtube.com/watch?v=qI1MAr0q89E",
    keywords: "Mezcla eb 5.1 de trailers",
    type: "youtube"
  },
  {
    index: "D.1",
    year: "©2023",
    title: "Floating with spirits, por Juanita Onzaga",
    url: "https://www.youtube.com/watch?v=RpxViBRU2O4",
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
    url: "https://www.youtube.com/watch?v=X9v7wG8SzF4&t=100s",
    type: "youtube"
  },
  {
    index: "D.4",
    year: "©2023",
    title: "Costa Canuva",
    url: "https://www.youtube.com/watch?v=-vRXv1zhy00&ab_channel=GerardoMart%C3%ADnezAngeles",
    type: "youtube"
  },
  {
    index: "D.5",
    year: "©2023",
    title: "Giardino",
    url: "https://www.youtube.com/watch?v=2ezITLyqnhI&t=1s",
    type: "youtube"
  },
  {
    index: "D.6",
    year: "©2023",
    title: "Avenir",
    url: "https://www.youtube.com/watch?v=rJj2wFJHn-Q&ab_channel=GerardoMart%C3%ADnezAngeles",
    type: "youtube"
  }
]