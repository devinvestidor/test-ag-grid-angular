import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusActionComponent } from './plus-action.component';

describe('PlusActionComponent', () => {
  let component: PlusActionComponent;
  let fixture: ComponentFixture<PlusActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlusActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlusActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
