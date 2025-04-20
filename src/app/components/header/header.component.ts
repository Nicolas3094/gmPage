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
    "_desktop_header.component.scss",
    "_phone_header.component.scss",
    "_tablet_header.component.scss",
  ]
})

export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {

  private readonly headerService: HeaderService = inject(HeaderService);
  private readonly spinnerService: SpinnerService = inject(SpinnerService);

  private hasExpandedSubcription?: Subscription;

  videoSource?: String;
  headerInfo !: HeaderInfo;
  videoLoaded : boolean = false;
  hasExpanded!: boolean;


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

  private playVideoElement(videoElementRef: ElementRef<HTMLVideoElement>) {
    const video: HTMLVideoElement = videoElementRef.nativeElement;

    video.src = this.headerInfo.videoPlayBack;


    video.onloadeddata = async () => {

      this.videoLoaded = true;
      this.spinnerService.emitLoadedVideo(this.videoLoaded);

      try {
        await video.play();
        // Añade esto para verificar si el video está realmente reproduciéndose
        video.hidden = false;
      } catch (err) {
        console.warn('Autoplay bloqueado:', err);
      }
      // Maneja errores de carga
      video.onerror = () => {
        console.error('Error al cargar el video');
        this.videoLoaded = false;
        this.spinnerService.emitLoadedVideo(this.videoLoaded);
      };
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
