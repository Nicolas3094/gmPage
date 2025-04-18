import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormattedLinkComponent } from './formatted-link.component';

describe('FormattedLinkComponent', () => {
  let component: FormattedLinkComponent;
  let fixture: ComponentFixture<FormattedLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormattedLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormattedLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
