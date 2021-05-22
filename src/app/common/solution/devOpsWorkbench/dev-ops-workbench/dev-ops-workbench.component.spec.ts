import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevOpsWorkbenchComponent } from './dev-ops-workbench.component';

describe('DevOpsWorkbenchComponent', () => {
  let component: DevOpsWorkbenchComponent;
  let fixture: ComponentFixture<DevOpsWorkbenchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevOpsWorkbenchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevOpsWorkbenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
