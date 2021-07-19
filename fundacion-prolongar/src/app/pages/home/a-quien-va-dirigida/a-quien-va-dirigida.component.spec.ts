import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AQuienVaDirigidaComponent } from './a-quien-va-dirigida.component';

describe('AQuienVaDirigidaComponent', () => {
  let component: AQuienVaDirigidaComponent;
  let fixture: ComponentFixture<AQuienVaDirigidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AQuienVaDirigidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AQuienVaDirigidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
