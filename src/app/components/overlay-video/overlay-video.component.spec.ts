import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayVideoComponent } from './overlay-video.component';

describe('OverlayVideoComponent', () => {
  let component: OverlayVideoComponent;
  let fixture: ComponentFixture<OverlayVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverlayVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverlayVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
