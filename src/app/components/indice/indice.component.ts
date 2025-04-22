import { Component, ElementRef, inject, OnDestroy, OnInit } from '@angular/core';
import { IndexElement } from '../../models/index-element.model';
import { NgFor, NgIf } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { ProjectElementComponent } from '../project-element/project-element.component';
import { ExpandedObject } from '../../models/ExpandendObject.model';
import { SpinnerService } from '../../services/spinner/spinner.service';
import { FirestoreIndexElementsRepository } from '../../repositories/firestore/index/firestore-index-elements.repository';

@Component({
  selector: 'app-indice',
  imports: [NgFor, NgIf,ProjectElementComponent],
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

  loadedData : boolean = false;

  private indexElementsRepository = inject(FirestoreIndexElementsRepository);
  private spinnerService: SpinnerService = inject(SpinnerService);

  constructor() {
   
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.indexElementsRepository
    .data$
    .subscribe(value => {
      this.indexArray = value;
      this.loadedData = true;
      this.spinnerService.emitLoadedDta(true);
    })
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
