import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpasspageComponent } from './forgotpasspage.component';

describe('ForgotpasspageComponent', () => {
  let component: ForgotpasspageComponent;
  let fixture: ComponentFixture<ForgotpasspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotpasspageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotpasspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
