import { Component, Input, OnInit } from '@angular/core';
import { IndexElement } from '../../models/index-element.model';
import { NgIf } from '@angular/common';

const youtubeUrlRegex = /^(https:\/\/)(www\.youtube\.com\/watch\?)(v=.+)$/;

@Component({
  selector: 'app-formatted-link',
  imports: [NgIf],
  templateUrl: './formatted-link.component.html',
  styleUrl: './formatted-link.component.scss'
})
export class FormattedLinkComponent implements OnInit {

  @Input()
  link !: string;

  httpGroup?: String;
  linkGroup?: String;
  idGroup?: String;

  ngOnInit(): void {
    let result = youtubeUrlRegex.exec(this.link);
    if (result != null) {
      if (result[1] != null) {
        this.httpGroup = result[1];
      }
      if (result[2] != null) {
        this.linkGroup = result[2];
      }
      if (result[3] != null) {
        this.idGroup = result[3];
      }
    }
  }

  sendToNewPage(url?: string) {
    if (url) {
      window.open(url!, '_blank');
    }
  }
}
