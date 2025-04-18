import { AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HeaderInfo } from '../../models/header-info.model';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ExpandElementService } from '../../services/expand-element.service';
import { Subscription } from 'rxjs';
import { HeaderService } from '../../services/header.service';
import { SpinnerService } from '../../services/spinner.service';

@Component({
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
  private spinnerService: SpinnerService = inject(SpinnerService);

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
      this.playVideoElement(this.videoRef)
    }
  }

  ngOnDestroy(): void {
    this.hasExpandedSubcription?.unsubscribe();
  }

  ngOnInit() {
    this.spinnerService.emitLoadedVideo(false);
    this.headerInfo = this.headerService.getHeaderInfo();
    this.videoSource = this.headerService.getHeaderInfo().videoPlayBack;

    this.hasExpandedSubcription = this.expandElementService.events$.subscribe(value => {
      this.hasExpanded = value.isActive;
    });
  }

  playVideoElement(videoElementRef: ElementRef<HTMLVideoElement>) {
    const video: HTMLVideoElement = videoElementRef.nativeElement;

    video.src = this.headerInfo.videoPlayBack;

    video.onloadeddata = () => {
      this.videoLoaded = true;
      this.spinnerService.emitLoadedVideo(this.videoLoaded);
      video.play();
    };
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
