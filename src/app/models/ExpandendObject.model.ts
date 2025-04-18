import { ElementRef } from "@angular/core";

export interface ExpandedObject {
    id:number;
    isActive:boolean;
    elementRef: ElementRef;
}