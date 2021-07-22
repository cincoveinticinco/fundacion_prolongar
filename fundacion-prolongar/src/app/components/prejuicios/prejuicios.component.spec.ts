import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrejuiciosComponent } from './prejuicios.component';

describe('PrejuiciosComponent', () => {
  let component: PrejuiciosComponent;
  let fixture: ComponentFixture<PrejuiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrejuiciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrejuiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
