import { Component, ElementRef, HostListener, inject, Input, OnInit } from '@angular/core';
import { ExpandElementService } from '../../../services/expand/expand-element.service';


@Component({
  selector: 'app-scroll-arrow',
  template: `
    <div class="scroll-arrow" [class.visible]="isVisible" (click)="scrollToMain()">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 5v14M19 12l-7 7-7-7"/>
      </svg>
    </div>
  `,
  styles: [`
    .scroll-arrow {
      width: 40px;
      height: 40px;
      background: rgba(0, 0, 0, 0.6);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      opacity: 0;
      transition: opacity 2s ease;
      z-index: 1000;
      border-style: solid;
      border-color: white;
      border-width: 1px;

    }
    .scroll-arrow.visible {
      opacity: 1;
    }
    .scroll-arrow svg {
      color: white;
      width: 60%;
      height: 60%;
    }
  `]
})
export class ScrollArrowComponent implements OnInit{
  
  isVisible = false;
  
  private inactivityTimer: any;

  private readonly INACTIVITY_DELAY = 5000; // 3 segundos
  
  private hasScrolled = false;

  ngOnInit() {
    this.startInactivityTimer();
  }

  @Input() elementToScroll!:ElementRef;
  private expandeElement = inject(ExpandElementService);

  @HostListener('window:scroll')
  onUserActivity() {
    if(window.scrollY === 0){
      this.hasScrolled = false;
      this.startInactivityTimer();

    } else {
      clearTimeout(this.inactivityTimer);
      this.hasScrolled = true;
      this.hideArrow();
    } 
  }

  private startInactivityTimer() {

    clearTimeout(this.inactivityTimer);

    this.inactivityTimer = setTimeout(() => {
      this.showArrow();
    }, this.INACTIVITY_DELAY);
  }

  private showArrow() {
    this.isVisible = true;
  }

  private hideArrow() {
    this.isVisible = false;
  }

  scrollToMain() {
    this.expandeElement.focusOnElement(this.elementToScroll);
  }
}
