import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutProspectComponent } from './ajout-prospect.component';

describe('AjoutProspectComponent', () => {
  let component: AjoutProspectComponent;
  let fixture: ComponentFixture<AjoutProspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutProspectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
