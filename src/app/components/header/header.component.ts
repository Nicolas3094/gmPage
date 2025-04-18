import { AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HeaderInfo } from '../../models/header-info.model';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ExpandElementService } from '../../services/expand-element.service';
import { Subscription } from 'rxjs';
import { HeaderService } from '../../services/header.service';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [NgFor, NgIf, RouterModule, NgClass],
  templateUrl: './header.component.html',
  styleUrls: [
    "./header.component.scss",
    "__phone_header.component.scss",
    "__tablet_header.component.scss",
  ]
})

export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {

  private headerService: HeaderService = inject(HeaderService);

  videoSource?: String;

  headerInfo !: HeaderInfo;
  videoLoaded = false;
  hasExpanded!: boolean;
  hasExpandedSubcription?: Subscription;

  @ViewChild('videoElement') videoRef?: ElementRef;


  constructor(private router: Router, private expandElementService: ExpandElementService) {
  }

  ngAfterViewInit(): void {

    if (this.videoRef) {
      const video: HTMLVideoElement = this.videoRef.nativeElement;

      video.src = this.headerInfo.videoPlayBack;

      video.onloadeddata = () => {
        this.videoLoaded = true;
        console.log("video loaded: " + video.src)
      };
    }
  }

  ngOnDestroy(): void {
    this.hasExpandedSubcription?.unsubscribe();
  }

  ngOnInit() {

    this.headerInfo = this.headerService.getHeaderInfo();
    this.videoSource = this.headerService.getHeaderInfo().videoPlayBack;

    this.hasExpandedSubcription = this.expandElementService.events$.subscribe(value => {
      this.hasExpanded = value.isActive;
    });
  }


  onIndex() {
    console.log("index");
    this.router.navigateByUrl("index");
  }

  onImages() {
    console.log("images")
    this.router.navigateByUrl("images");
  }

  handleContact(url?: string) {
    if (url != null) {
      window.open(url, "_blanks");
    }
  }
}
