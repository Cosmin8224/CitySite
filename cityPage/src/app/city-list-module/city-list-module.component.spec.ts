import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityListModuleComponent } from './city-list-module.component';

describe('CityListModuleComponent', () => {
  let component: CityListModuleComponent;
  let fixture: ComponentFixture<CityListModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityListModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityListModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
