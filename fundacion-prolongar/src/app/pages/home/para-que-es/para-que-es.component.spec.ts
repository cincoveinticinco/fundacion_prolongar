import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaQueEsComponent } from './para-que-es.component';

describe('ParaQueEsComponent', () => {
  let component: ParaQueEsComponent;
  let fixture: ComponentFixture<ParaQueEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParaQueEsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParaQueEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
