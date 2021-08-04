import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderModuleComponent } from './loader-module.component';

describe('LoaderModuleComponent', () => {
  let component: LoaderModuleComponent;
  let fixture: ComponentFixture<LoaderModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
