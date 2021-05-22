import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsureaiComponent } from './insureai.component';

describe('InsureaiComponent', () => {
  let component: InsureaiComponent;
  let fixture: ComponentFixture<InsureaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsureaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsureaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
