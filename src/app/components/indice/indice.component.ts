import { AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { IndexElement } from '../../models/index-element.model';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { map, merge, Observable, Subscription, tap, zip } from 'rxjs';
import { ProjectElementComponent } from '../project-element/project-element.component';
import { ExpandedObject } from '../../models/ExpandendObject.model';
import { IndexElementsService } from '../../services/indexElements/index-elements.service';
import { ExpandElementService } from '../../services/expand/expand-element.service';
import { HeaderService } from '../../services/header/header.service';

@Component({
  selector: 'app-indice',
  imports: [NgFor, NgIf, ProjectElementComponent, AsyncPipe],
  styleUrls: [
    '_desktop_indice.component.scss',
    '_phone_indice.component.scss',
    '_tablet_indice.component.scss'],
  template: `
  <main class="mainIndex" *ngIf=" indexArray$ | async as indexArray">
    
    <ng-container *ngFor="let indexElem of indexArray; let i = index">

        <app-project-element [projectElement]="indexElem" [expand]="expandedIndex === i"></app-project-element>

    </ng-container>
  
  </main>
`
})
export class IndiceComponent implements OnInit, OnDestroy {


  itemExpanded: boolean = false;
  prevItemExpanded: boolean = false;

  expandedIndex?: number;
  elementsList?: Array<IndexElement>;
  indexArray$ !: Observable<IndexElement[]>;
  loadedData: boolean = false;

  private indexElementsService = inject(IndexElementsService);
  private expandElementService = inject(ExpandElementService);
  private headerService = inject(HeaderService);
  private subscription = new Subscription();
  private subscriptionElementRef = new Subscription();

  @ViewChildren(ProjectElementComponent)
  projectElements!: QueryList<ProjectElementComponent>;

  @ViewChildren(ProjectElementComponent, { read: ElementRef })
  projectElementRefs!: QueryList<ElementRef>;

  getAllElementRefs(): ElementRef[] {
    return this.projectElementRefs.toArray();
  }

  getAllProjectElements(): ProjectElementComponent[] {
    return this.projectElements.toArray();
  }


  ngOnInit(): void {
    this.loadedData = true;
    
    const menu = this.headerService.data$.pipe(map(data => data.listado));

    this.indexArray$ = this.indexElementsService.list$
      .pipe(
        tap(elements => {
          
          this.subscriptionElementRef = zip(menu, this.projectElementRefs.changes)
            .subscribe(data => {

              let refMenuList : ElementRef[] = [];
              const listmenu = data[0] as Array<string>;
              const refs : ElementRef[] = this.getAllElementRefs();

              if(elements.length != refs.length){
                console.error("elementos diferentes");
                throw new Error("Error en indice.");
              }

              let indexSearch = 0;

              for( let i = 0 ; i < elements.length ; i ++){ // O(n)

                const elementKeywords = elements[i].keywords!.toLowerCase().trim();
                if(indexSearch === listmenu.length){
                  break;
                }

                const searchKeyword = this.extractValueSafe(listmenu[indexSearch].toLowerCase());

                if (elementKeywords === searchKeyword){

                  if(indexSearch < listmenu.length){

                    refMenuList.push(refs[i]);
                    indexSearch ++;

                  } 
                }
              }

              this.headerService.pushMenuRefs(refMenuList);

            });
        })
      );


    this.subscription = this.expandElementService.events$
      .subscribe(event => {
        this.toggleExpand(event);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscriptionElementRef.unsubscribe();
  }


  async toggleExpand(expandedObject: ExpandedObject) {

    let index = expandedObject.id;
    let focusElement = expandedObject.elementRef;
    this.expandedIndex = this.expandedIndex === index && !expandedObject.isActive ? undefined : index;

    await new Promise(resolve => setTimeout(resolve, 300));

    this.expandElementService.focusOnElement(focusElement);

  }

  private extractValueSafe(input: string): string {
    const result = input.match(/^\([a-zA-Z]\)\s+(.*)/);
    return result ? result[1].trim() : input;
    }


}
