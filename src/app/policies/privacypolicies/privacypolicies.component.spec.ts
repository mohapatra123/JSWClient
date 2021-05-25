import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacypoliciesComponent } from './privacypolicies.component';

describe('PrivacypoliciesComponent', () => {
  let component: PrivacypoliciesComponent;
  let fixture: ComponentFixture<PrivacypoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacypoliciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacypoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
