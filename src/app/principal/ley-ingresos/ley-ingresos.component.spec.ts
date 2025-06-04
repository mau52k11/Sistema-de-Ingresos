import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeyIngresosComponent } from './ley-ingresos.component';

describe('LeyIngresosComponent', () => {
  let component: LeyIngresosComponent;
  let fixture: ComponentFixture<LeyIngresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeyIngresosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeyIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
