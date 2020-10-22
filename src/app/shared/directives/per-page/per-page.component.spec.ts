import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerPageComponent } from './per-page.component';

describe('PerPageComponent', () => {
  let component: PerPageComponent;
  let fixture: ComponentFixture<PerPageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [PerPageComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
