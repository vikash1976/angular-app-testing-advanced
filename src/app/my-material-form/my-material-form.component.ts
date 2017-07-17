import { Component, OnInit } from '@angular/core';
import { Address } from './address';

@Component({
  selector: 'app-my-material-form',
  templateUrl: './my-material-form.component.html',
  styleUrls: ['./my-material-form.component.css']
})
export class MyMaterialFormComponent implements OnInit {

  address = new Address();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert("Thanks for submitting! Data: " + JSON.stringify(this.address));
  }


}
