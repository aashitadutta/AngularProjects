import { Component, OnInit, Input, ViewEncapsulation, OnChanges, DoCheck, AfterContentInit, 
	AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //none, native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy {
	@Input('srvElement') element : {type: string, name: string, content: string};

  constructor() {
  console.log('constructor calld'); }

  ngOnInit() {
  	console.log('ngOnInit called');
  }

  ngOnChanges(){
  	console.log('ngOnChanges called');
  }

  ngDoCheck(){
  	console.log('docheck called');
  }
  ngAfterContentInit(){
  	console.log('ngAfterContentInit called');
  }
  ngAfterContentChecked(){
  	console.log('ngAfterContentChecked called');
  }

ngAfterViewInit(){
  	console.log('ngAfterContentInit called');
  }
  ngAfterViewChecked(){
  	console.log('ngAfterContentChecked called');
  }
 ngOnDestroy(){
 	console.log('OnDestroy called');
 }
}
