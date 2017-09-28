import { element } from 'protractor';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core'; 

//Important to create component here so that we can apply directive to its template
//elements and test the effect.
@Component({
  template: `
    <p highlight="lightblue">First</p>
    <p highlight>Second</p>
  `
})
class DirectiveHostComponent { 
}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveHostComponent, HighlightDirective ]
    });
    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges(); 
  });

  it('should highlight element with directives bgColor set to the element', () => {
    let de = fixture.debugElement.queryAll(By.css('p'))[0];

    let directive = de.injector.get(HighlightDirective);
    expect(de.nativeElement.style.backgroundColor).toBe(directive.bgColor);
  });

   it('should highlight element with default background color, when no color is set', () => {
    let de = fixture.debugElement.queryAll(By.css('p'))[1];

    let directive = de.injector.get(HighlightDirective);
    expect(de.nativeElement.style.backgroundColor).toBe(directive.defaultColor);
  });

   it('should set directives bgColor color with lightblue', () => {
    let de = fixture.debugElement.queryAll(By.css('p'))[0];

    let directive = de.injector.get(HighlightDirective);
    expect(directive.bgColor).toBe('lightblue');
  });
});
