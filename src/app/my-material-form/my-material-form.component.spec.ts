import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMaterialFormComponent } from './my-material-form.component';

describe('MyMaterialFormComponent', () => {
  let component: MyMaterialFormComponent;
  let fixture: ComponentFixture<MyMaterialFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMaterialFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMaterialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
