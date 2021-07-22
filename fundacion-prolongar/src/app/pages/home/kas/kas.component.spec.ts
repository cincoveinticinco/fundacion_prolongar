import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KasComponent } from './kas.component';

describe('KasComponent', () => {
  let component: KasComponent;
  let fixture: ComponentFixture<KasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
