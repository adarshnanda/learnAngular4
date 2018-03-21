import {Component, OnInit} from "@angular/core";

@Component({
	selector: 'new-cmp',
	templateUrl:'./new-cmp.component.html'
})

export class NewCmpComponent implements OnInit {
	message = 'new component is working fine';
	

	ngOnInit(){
		setTimeout(()=>{
			this.message = "------------ng-Init works------------";
		},1000);
	}
}