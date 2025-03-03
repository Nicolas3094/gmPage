import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-instagram-feed',
  imports: [],
  templateUrl: './instagram-feed.component.html',
  styleUrl: './instagram-feed.component.scss'
})
export class InstagramFeedComponent {
  @Input() instagramId:string | undefined;


  build(){
    return `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/`+this.instagramId+`/" data-instgrm-version="13">
      <a href="https://www.instagram.com/p/`+this.instagramId+`/" target="_blank">Ver en Instagram</a>
    </blockquote>`
  }
}
