import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporalidadComponent } from './corporalidad.component';

describe('CorporalidadComponent', () => {
  let component: CorporalidadComponent;
  let fixture: ComponentFixture<CorporalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporalidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
