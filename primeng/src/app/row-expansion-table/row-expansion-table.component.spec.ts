import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowExpansionTableComponent } from './row-expansion-table.component';

describe('RowExpansionTableComponent', () => {
  let component: RowExpansionTableComponent;
  let fixture: ComponentFixture<RowExpansionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowExpansionTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowExpansionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
