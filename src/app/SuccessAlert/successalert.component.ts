import { Component } from '@angular/core';
@Component({
	selector: 'app-success',
	template: `
	<p> This is sucess!</p>`,
	styles: [
       `p{
           padding: 2px;
           color: green;
           background-color: yellow;
           	}
	`]

})
export class SuccessAlertComponent {
	
}