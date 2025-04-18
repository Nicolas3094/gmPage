import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementImageComponent } from './element-image.component';

describe('ElementImageComponent', () => {
  let component: ElementImageComponent;
  let fixture: ComponentFixture<ElementImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
