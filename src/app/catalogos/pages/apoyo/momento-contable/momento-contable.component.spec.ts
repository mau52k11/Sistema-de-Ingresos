import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentoContableComponent } from './momento-contable.component';

describe('MomentoContableComponent', () => {
  let component: MomentoContableComponent;
  let fixture: ComponentFixture<MomentoContableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MomentoContableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomentoContableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
