import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrupacionPolizaComponent } from './agrupacion-poliza.component';

describe('AgrupacionPolizaComponent', () => {
  let component: AgrupacionPolizaComponent;
  let fixture: ComponentFixture<AgrupacionPolizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgrupacionPolizaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgrupacionPolizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
