import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SafeUrlPipe } from '../../safe-url.pipe';
import { IndexElement } from '../../models/index-element.model';
import { NgIf } from '@angular/common';
import { InstagramFeedComponent } from '../instagram-feed/instagram-feed.component';

@Component({
  standalone: true,
  selector: 'app-overlay-video',
  imports: [SafeUrlPipe, NgIf, InstagramFeedComponent],
  templateUrl: './overlay-video.component.html',
  styleUrl: './overlay-video.component.scss'
})
export class OverlayVideoComponent {
  @Input() popup: boolean = false;
  @Input() currentIndexElement?: IndexElement;
  @Output() popupChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  close() {
    this.popup = false;
    this.currentIndexElement = undefined;
    this.popupChange.emit(false);
  }

}
