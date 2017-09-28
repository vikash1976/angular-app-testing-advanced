import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterComponent ]
    })
    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
  });

  it('should render total votes counter', () => {
    component.othersVote = 20;
    component.myVote = 1;

    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.vote-count'));
    let el: HTMLElement = de.nativeElement;
    expect(el.innerText).toContain(21);
  });

  it('should highlight upvote button when upVoted', () => {
    component.myVote = 1;

    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    
    expect(de.classes['highlighted']).toBeTruthy();
  });

   it('should increase totalVotes when upvote button is clicked', () => {
    let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    button.triggerEventHandler('click', null);
    
    expect(component.totalVotes).toBe(1);
  });

    it('should decrease totalVotes when downvote button is clicked', () => {
    let button = fixture.debugElement.query(By.css('.glyphicon-menu-down'));

    button.triggerEventHandler('click', null);
    
    expect(component.totalVotes).toBe(-1);
  });
});
