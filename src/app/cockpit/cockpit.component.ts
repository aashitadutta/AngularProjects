import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent:string}>();
  newServerName='';
  newServerContent='';
  @ViewChild('serverContentInput',{static:true}) serverContentInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(nameInput:HTMLInputElement){
  	//console.log(nameInput.value);
  	this.serverCreated.emit({serverName : nameInput.value, 
  		serverContent: this.newServerContent});
  }
  onAddBlueprint(){
  	this.blueprintCreated.emit({serverName : this.newServerName, serverContent: this.newServerContent});
  	//this.blueprintCreated.emit({serverName : nameInput.value, serverContent: this.newServerContent});
  }

}
