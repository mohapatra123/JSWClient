import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsureTabComponent } from './insure-tab.component';

describe('InsureTabComponent', () => {
  let component: InsureTabComponent;
  let fixture: ComponentFixture<InsureTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsureTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsureTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
