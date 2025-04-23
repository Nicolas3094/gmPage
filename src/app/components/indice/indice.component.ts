import { Component, ElementRef, inject, OnInit } from '@angular/core';
import { IndexElement } from '../../models/index-element.model';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { ProjectElementComponent } from '../project-element/project-element.component';
import { ExpandedObject } from '../../models/ExpandendObject.model';
import { IndexElementsService } from '../../services/indexElements/index-elements.service';

@Component({
  selector: 'app-indice',
  imports: [NgFor, NgIf,ProjectElementComponent, AsyncPipe],
  templateUrl: './indice.component.html',
  styleUrls: [
    '_desktop_indice.component.scss',
    '_phone_indice.component.scss',
    '_tablet_indice.component.scss']
})
export class IndiceComponent implements OnInit{

  itemExpanded: boolean = false;

  expandedIndex?: number;

  elementsList?: Array<IndexElement>;

  observable$ !: Observable<Array<IndexElement>>;

  indexArray$ !: Observable<IndexElement[]>;

  loadedData : boolean = false;

  private indexElementsService = inject(IndexElementsService);


  ngOnInit(): void {
    const value = this.indexElementsService.list$;
    this.loadedData = true;
    this.indexArray$ = value;
  }

  toggleExpand(expandedObject: ExpandedObject) {
    let index = expandedObject.id;
    let focusElement = expandedObject.elementRef;

    this.expandedIndex = this.expandedIndex === index && !expandedObject.isActive ? undefined : index;

  }

  focusOnElement(elementRef: ElementRef) {
    elementRef.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'end' // Esto es clave para que vaya al top
    });
  }
}
