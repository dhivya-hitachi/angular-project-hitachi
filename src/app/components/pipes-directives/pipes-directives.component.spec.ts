import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesDirectivesComponent } from './pipes-directives.component';

describe('PipesDirectivesComponent', () => {
  let component: PipesDirectivesComponent;
  let fixture: ComponentFixture<PipesDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesDirectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
