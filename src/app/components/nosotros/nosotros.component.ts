import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { NgFor, NgIf } from '@angular/common';
import { Nosotros } from '../../models/nosotros.model';
import { NosotrosService } from '../../services/nosotros.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nosotros',
  imports: [NgIf, NgFor, ContactComponent],
  templateUrl: './nosotros.component.html',
  styleUrls: ['./_desktop_nosotros.component.scss',
    './_phone_nosotros.component.scss',
    './_tablet_nosotros.component.scss'
  ]
})
export class NosotrosComponent implements OnInit, OnDestroy{
  nosotros?: Nosotros;

  nosotrosServices :NosotrosService= inject(NosotrosService);

  private sub =  new Subscription();

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {
    this.sub = this.nosotrosServices.clinets$.subscribe(value => {
      this.nosotros = value;
    });
  }
 
}
