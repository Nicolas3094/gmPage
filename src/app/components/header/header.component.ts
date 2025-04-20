import { AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HeaderInfo } from '../../models/header-info.model';
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { HeaderService } from '../../services/header.service';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-header',
  imports: [NgFor, RouterModule, NgIf],
  templateUrl: './header.component.html',
  styleUrls: [
    "_desktop_header.component.scss",
    "_phone_header.component.scss",
    "_tablet_header.component.scss",
  ]
})

export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {

  private headerService: HeaderService = inject(HeaderService);
  private spinnerService: SpinnerService = inject(SpinnerService);
  private router: Router = inject(Router);

  private hasExpandedSubcription?: Subscription;

  videoSource?: String;
  headerInfo !: HeaderInfo;
  videoLoaded: boolean = false;
  dataLoaded: boolean = false;
  hasExpanded: boolean = false;


  @ViewChild('videoElement') videoRef?: ElementRef;

  constructor() {
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
    this.hasExpandedSubcription = this.headerService.headerInfo$
      .subscribe(value => {
        this.headerInfo = value;
        this.videoSource = value.videoPlayBack;
        this.dataLoaded = true;
        this.spinnerService.emitLoadedVideo(true);
      });
  }

  private playVideoElement(videoElementRef: ElementRef<HTMLImageElement>) {
    const video: HTMLImageElement = videoElementRef.nativeElement;

    video.src = this.headerInfo.videoPlayBack;

    this.spinnerService.emitLoadedVideo(true);

    video.onloadeddata = async () => {
      this.videoLoaded = true;
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
