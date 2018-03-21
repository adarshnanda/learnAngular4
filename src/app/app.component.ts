import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  months = ["January", "Feburary", "March", "April", "May", 
            "June", "July", "August", "September",
            "October", "November", "December"];
  displayMonths = true;
  month = "January";
  ngChange = function(){
  	this.changeMessage = "Month changed";
  	console.log("changed");
  	setTimeout(()=>{//this will not work if we donot use arrow function.
  		this.changeMessage = null;
  	},1000);

  }

  disableRightClick = (event)=>{
  	if(event.which===3){
  		event.preventDefault();
  		alert("right click not allowed");
  	}
  };
}
