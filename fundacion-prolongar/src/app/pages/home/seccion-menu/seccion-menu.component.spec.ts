import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionMenuComponent } from './seccion-menu.component';

describe('SeccionMenuComponent', () => {
  let component: SeccionMenuComponent;
  let fixture: ComponentFixture<SeccionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
