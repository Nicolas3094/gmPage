import { Component, ElementRef, inject, OnDestroy, OnInit } from '@angular/core';
import { IndexElement } from '../../models/index-element.model';
import { NgFor } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { ProjectElementComponent } from '../project-element/project-element.component';
import { ExpandedObject } from '../../models/ExpandendObject.model';
import { IndexElementsService } from '../../services/index-elements.service';

@Component({
  selector: 'app-indice',
  imports: [NgFor, ProjectElementComponent],
  templateUrl: './indice.component.html',
  styleUrls: [
    '_desktop_indice.component.scss',
    '_phone_indice.component.scss',
    '_tablet_indice.component.scss']
})
export class IndiceComponent implements OnInit, OnDestroy {

  itemExpanded: boolean = false;

  expandedIndex?: number;

  elementsList?: Array<IndexElement>;

  observable$ !: Observable<Array<IndexElement>>;

  indexArray !: Array<IndexElement>;

  subscription !: Subscription;

  private indexElementsService: IndexElementsService = inject(IndexElementsService);

  constructor() {
    this.subscription = this.indexElementsService
      .getCollection()
      .subscribe(value => {
        this.indexArray = value;
      })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
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
