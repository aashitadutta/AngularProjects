import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  userName='TestName';
  constructor() { }

  ngOnInit(): void {
  }
setUserName(event:Event){
	this.userName=(<HTMLInputElement>event.target).value;

}
}
