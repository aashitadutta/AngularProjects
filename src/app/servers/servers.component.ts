import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
serverCreationStatus = 'no servers were created';
serverName='MyServer';
serverCreated=false;
servers = ['Testserver','Testserver2'];
  constructor() { 
  	setTimeout(() => {
  		this.allowNewServer = true;
  	},10000)}

  ngOnInit(): void {
  }
onCreateServer(){
	this.servers.push(this.serverName);
	this.serverCreated=true;
	this.serverCreationStatus = 'server was created! Name is ' + this.serverName;
}
onUpdateServerName(event:Event){
	//console.log(event);
    this.serverName=(<HTMLInputElement>event.target).value;
}
}
