import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoPlatformService {
  
  isYoutubeOrVimeoUrl(url: string): { isYoutube: boolean; isVimeo: boolean } {
    if (!url) return { isYoutube: false, isVimeo: false };

    const normalizedUrl = url.toLowerCase().trim();
    
    return {
      isYoutube: this.isYoutubeUrl(normalizedUrl),
      isVimeo: this.isVimeoUrl(normalizedUrl)
    };
  }

  private isYoutubeUrl(url: string): boolean {
    // Patrones para diferentes formatos de URLs de YouTube
    const youtubePatterns = [
      /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/,
      /^https?:\/\/youtube\.com\/embed\/.+/,
      /^https?:\/\/youtube\.com\/watch\?v=.+/,
      /^https?:\/\/youtu\.be\/.+/
    ];

    return youtubePatterns.some(pattern => pattern.test(url));
  }

  private isVimeoUrl(url: string): boolean {
    // Patrones para URLs de Vimeo
    const vimeoPatterns = [
      /^(https?:\/\/)?(www\.)?vimeo\.com\/.+/,
      /^https?:\/\/player\.vimeo\.com\/video\/.+/
    ];

    return vimeoPatterns.some(pattern => pattern.test(url));
  }

  extractVideoId(url: string): { platform: 'youtube' | 'vimeo' | 'unknown'; id: string | null } {
    const { isYoutube, isVimeo } = this.isYoutubeOrVimeoUrl(url);
    
    if (isYoutube) {
      return {
        platform: 'youtube',
        id: this.extractYoutubeId(url)
      };
    }

    if (isVimeo) {
      return {
        platform: 'vimeo',
        id: this.extractVimeoId(url)
      };
    }

    return { platform: 'unknown', id: null };
  }

  private extractYoutubeId(url: string): string | null {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }

  private extractVimeoId(url: string): string | null {
    const regExp = /(vimeo\.com\/|video\/)(\d+)/;
    const match = url.match(regExp);
    return match ? match[2] : null;
  }
}