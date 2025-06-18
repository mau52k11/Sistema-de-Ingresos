import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtipoDocumentoInternoComponent } from './subtipo-documento-interno.component';

describe('SubtipoDocumentoInternoComponent', () => {
  let component: SubtipoDocumentoInternoComponent;
  let fixture: ComponentFixture<SubtipoDocumentoInternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubtipoDocumentoInternoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtipoDocumentoInternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
