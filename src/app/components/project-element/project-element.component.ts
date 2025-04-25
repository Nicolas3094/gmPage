import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IndexElement } from '../../models/index-element.model';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { FormattedLinkComponent } from '../formatted-link/formatted-link.component';
import { ElementImageComponent } from '../element-image/element-image.component';
import { ExpandElementService } from '../../services/expand/expand-element.service';
import { ExpandedObject } from '../../models/ExpandendObject.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

const youtubeUrlRegex = /^(https:\/\/)(www\.youtube\.com\/watch\?)(v=.+)$/;

@Component({
  selector: 'app-project-element',
  imports: [NgIf, NgClass, NgFor, FormattedLinkComponent, ElementImageComponent],
  templateUrl: './project-element.component.html',
  animations: [
    trigger('contentAnimation', [
      state('collapsed', style({ height: '0', opacity: '0', overflow: 'hidden' })),
      state('expanded', style({ height: '*', pacity: '1' })),
      transition('collapsed <=> expanded', [
        animate('300ms ease-in-out')
      ])
    ])
  ],
  styleUrls: [
    '_desktop_project-element.component.scss',
    '_mobile_project-element.component.scss',
    '_tablet_project-element.component.scss']
})
export class ProjectElementComponent implements OnInit {

  @Input() projectElement!: IndexElement;
  @Input() expand!: boolean;

  @ViewChild('scrollInto') miElemento!: ElementRef;

  httpGroup?: String;
  linkGroup?: String;
  idGroup?: String;

  constructor(private expandElementService: ExpandElementService) {
  }

  ngOnInit(): void {
    if (this.projectElement?.url) {

      let result = youtubeUrlRegex.exec(this.projectElement.url);

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
  }

  handleElement() {
    this.expand = !this.expand;

    const response = {
      id: this.projectElement.order,
      isActive: this.expand,
      elementRef: this.miElemento
    };

    requestAnimationFrame(() => {
      this.expandElementService.emitEvent(response);
    });

  }

  sendToNewPage(url?: string) {
    if (url) {
      window.open(url!, '_blank');
    }
  }
}
