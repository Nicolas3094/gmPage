import { NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoPlatformService } from '../../services/video-platform/video-platform.service';

@Component({
  selector: 'app-element-image',
  imports: [NgIf, NgFor],
  templateUrl: './element-image.component.html',
  styleUrl: './element-image.component.scss'
})
export class ElementImageComponent implements AfterViewInit {
  
  @Input() image?: string;
  @Input() images?: Array<string>;
  @Input() youtubeUrl?: string;
  @ViewChild('youtubeContainer') youtubeContainer!: ElementRef;

  videoService : VideoPlatformService = inject(VideoPlatformService);

  showIframe = false;
  safeUrl?: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngAfterViewInit() {
    if (this.youtubeUrl) {
      // Carga diferida cuando el elemento está en viewport
      this.setupIntersectionObserver();
    }
  }

  private setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.safeUrl) {
          this.loadYoutubeEmbed();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(this.youtubeContainer.nativeElement);
  }

  private loadYoutubeEmbed() {
    if(this.youtubeUrl!.includes("youtube")){
      const videoId = this.extractYoutubeId(this.youtubeUrl!);
      if (videoId) {
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&enablejsapi=1`
        );
        this.showIframe = true;
      }
    }else{
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.youtubeUrl!}?autoplay=1&muted=1&background=0&autopause=0`);
      this.showIframe = true;
    }
  
  }

  private extractYoutubeId(url: string): string | null {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }


}
