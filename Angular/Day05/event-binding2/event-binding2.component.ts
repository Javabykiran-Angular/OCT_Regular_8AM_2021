import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding2',
  templateUrl: './event-binding2.component.html',
  styleUrls: ['./event-binding2.component.css']
})
export class EventBinding2Component implements OnInit {

  result:number;
  constructor() { }

  ngOnInit() {
  }

  onClick(inputname){
      console.log(inputname)
      console.log("Data is ===> "+inputname.value);
      inputname.style.background='green';
      inputname.style.color='white';
  }

  onClick1(nameValue){
      console.log("Data =========== "+nameValue);
  }

  onAddition(num1,num2){
    let n1=+num1;
    let n2=+num2;
    this.result=n1+n2;
  }
  onChange(){
    console.log("Change Event Occur...");
  }


}
