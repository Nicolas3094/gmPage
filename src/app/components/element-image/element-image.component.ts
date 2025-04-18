import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-element-image',
  imports: [NgIf, NgFor],
  templateUrl: './element-image.component.html',
  styleUrl: './element-image.component.scss'
})
export class ElementImageComponent {
  @Input() image ?: string;
  @Input() images?: Array<string>;
}
