  import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styles : [`
  .password{
  	color:white;
  }
  `],
})
export class DirectivesComponent implements OnInit {
secretPassword = 'aashita';
detailsCreated =  false;
logs = [];
  constructor() { }

  ngOnInit(): void {
  }
  onCreateDetails(){
  	this.detailsCreated = true;
  	//this.logs.push(this.logs.length + 1);
  	this.logs.push(new Date());
  }
  getColor(){
  	this.secretPassword='aashita'?'green':'red';
  }

}
