import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IndexElement } from '../../models/index-element.model';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { FormattedLinkComponent } from '../formatted-link/formatted-link.component';
import { ElementImageComponent } from '../element-image/element-image.component';
import { ExpandElementService } from '../../services/expand/expand-element.service';
import { ExpandedObject } from '../../models/ExpandendObject.model';

const youtubeUrlRegex = /^(https:\/\/)(www\.youtube\.com\/watch\?)(v=.+)$/;

@Component({
  selector: 'app-project-element',
  imports: [NgIf, NgClass, NgFor, FormattedLinkComponent, ElementImageComponent],
  templateUrl: './project-element.component.html',
  styleUrls: [
    '_desktop_project-element.component.scss',
    '_mobile_project-element.component.scss',
    '_tablet_project-element.component.scss']
})
export class ProjectElementComponent implements OnInit {

  @Input() projectElement!: IndexElement;
  @Input() expand!: boolean;
  @Output() sendProject: EventEmitter<ExpandedObject> = new EventEmitter<ExpandedObject>();

  @ViewChild('scrolInto') miElemento!: ElementRef;

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
    
    this.expandElementService.emitEvent({
      id: this.projectElement.order,
      isActive: !this.expand,
      elementRef: this.miElemento
    })

    this.sendProject.emit({
      id: this.projectElement.order,
      isActive: !this.expand,
      elementRef: this.miElemento
    });

    this.expand = !this.expand;
  }

  sendToNewPage(url?: string) {
    if (url) {
      window.open(url!, '_blank');
    }
  }
}
