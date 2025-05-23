import { Component, inject,  OnInit } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Nosotros } from '../../models/nosotros.model';
import { NosotrosService } from '../../services/nosotros/nosotros.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nosotros',
  imports: [NgIf, NgFor, ContactComponent, AsyncPipe],
  templateUrl: './nosotros.component.html',
  styleUrls: ['./_desktop_nosotros.component.scss',
    './_phone_nosotros.component.scss',
    './_tablet_nosotros.component.scss'
  ]
})
export class NosotrosComponent implements OnInit {
  
  nosotros$ ?: Observable<Nosotros>;

  private nosotrosService = inject(NosotrosService);

  ngOnInit(): void {
    this.nosotros$ = this.nosotrosService.data$;
  }
 
}
