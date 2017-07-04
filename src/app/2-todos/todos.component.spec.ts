import { HttpModule } from '@angular/http';
import { TodoService } from './todo.service';
/* tslint:disable:no-unused-variable */
import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs';

import { TodosComponent } from './todos.component';



describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [TodosComponent],
      providers: [TodoService]
    })
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

//to enable this one, go and uncomment Observable approach in ngOnInit and comment Promise approach
  xit('should load todos from the server via TodoService', () => {
    //to get dependencies provided at module level
    let service = TestBed.get(TodoService);
    //to get dependencies provided at component level
    //let service1 = fixture.debugElement.injector.get(TodoService);

    spyOn(service, 'getTodos').and.returnValue(Observable.from([[1, 2, 3]]));

    fixture.detectChanges();

    expect(component.todos.length).toBe(3);
    //this fails because of fixture.detectChanges() in beforeEach. By this time our component is created and service is called.
    //We are too late here to change the implemenration of service with fake Observable's returned array.
    //To fix it comment out fixture.detectChanges() from beforeEach() and after spyOn call fixture.detectChanges()
  });

  it('should load todos from the server via TodoService and TodoService is Promise based', async(() => {
    //to get dependencies provided at module level
    let service = TestBed.get(TodoService);

    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.todos.length).toBe(3);
    })



  }));

  it('should load todos from the server via TodoService and TodoService is Promise based - another approach', fakeAsync(() => {
    //to get dependencies provided at module level
    let service = TestBed.get(TodoService);

    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));

    fixture.detectChanges();
    tick();
    expect(component.todos.length).toBe(3);


  }));
});
