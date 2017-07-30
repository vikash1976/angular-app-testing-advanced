import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdInputModule, MdButtonModule } from '@angular/material';

import { MyMaterialFormComponent } from './my-material-form.component';

describe('MyMaterialFormComponent', () => {
  let component: MyMaterialFormComponent;
  let fixture: ComponentFixture<MyMaterialFormComponent>;

 

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMaterialFormComponent ],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
    MdInputModule,
    MdButtonModule
      ]
    })
    fixture = TestBed.createComponent(MyMaterialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
