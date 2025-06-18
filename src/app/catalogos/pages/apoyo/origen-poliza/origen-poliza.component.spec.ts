import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrigenPolizaComponent } from './origen-poliza.component';

describe('OrigenPolizaComponent', () => {
  let component: OrigenPolizaComponent;
  let fixture: ComponentFixture<OrigenPolizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrigenPolizaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrigenPolizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
