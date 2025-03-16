import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCheckerComponent } from './type-checker.component';

describe('TypeCheckerComponent', () => {
  let component: TypeCheckerComponent;
  let fixture: ComponentFixture<TypeCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeCheckerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
