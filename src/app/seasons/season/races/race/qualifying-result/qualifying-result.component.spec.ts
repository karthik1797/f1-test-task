import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualifyingResultComponent } from './qualifying-result.component';

describe('QualifyingResultComponent', () => {
  let component: QualifyingResultComponent;
  let fixture: ComponentFixture<QualifyingResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualifyingResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualifyingResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
