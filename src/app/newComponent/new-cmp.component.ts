import {Component, OnInit} from "@angular/core";

@Component({
	selector: 'new-cmp',
	templateUrl:'./new-cmp.component.html'
})

export class NewCmpComponent implements OnInit {
	message = 'new component is working fine';
	

	ngOnInit(){
		console.log("ngOnInit is working fine");
	}
}