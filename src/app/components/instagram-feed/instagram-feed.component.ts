import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-instagram-feed',
  imports: [],
  templateUrl: './instagram-feed.component.html',
  styleUrl: './instagram-feed.component.scss'
})
export class InstagramFeedComponent implements OnInit {
  @Input() instagramId:string | undefined;

  ngOnInit(): void {
    this.loadInstagramScript();
  }

  loadInstagramScript(): void {
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }
}
