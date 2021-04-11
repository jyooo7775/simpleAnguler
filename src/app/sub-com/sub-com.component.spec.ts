import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubComComponent } from './sub-com.component';

describe('SubComComponent', () => {
  let component: SubComComponent;
  let fixture: ComponentFixture<SubComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
