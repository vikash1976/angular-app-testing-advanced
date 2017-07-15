import { TitlecasePipe } from './../titlecase.pipe';
import { Observable, Subject } from 'rxjs';

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { UserDetailsComponent } from './user-details.component';

class RouterStub {
  navigate() {

  }
}
class ActivatedRouteStub {
  private subject = new Subject();
  push(value) {
    this.subject.next(value);
  }

  //exposing params as property of this class
  get params() {
    return this.subject.asObservable();
  }
  //params: Observable<any> = Observable.empty();
}

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [UserDetailsComponent, TitlecasePipe],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    })
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should redirect to users page after user detail is saved', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate'); // we don't need to call and + callFake, as navigate method here is already a fake impl,
    //rather empty impl as per our RouterStub class.

    component.save();

    expect(spy).toHaveBeenCalledWith(['users']);
  });

  it('should redirect to not found page if user id is invalid', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate'); // we don't need to call and + callFake, as navigate method here is already a fake impl,
    //rather empty impl as per our RouterStub class.
    let route = TestBed.get(ActivatedRoute);
    route.push({ id: 0 });

    expect(spy).toHaveBeenCalledWith(['not-found']);
  });

  
});
