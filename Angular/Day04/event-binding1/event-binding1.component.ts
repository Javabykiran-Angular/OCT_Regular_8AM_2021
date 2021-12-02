import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding1',
  templateUrl: './event-binding1.component.html',
  styleUrls: ['./event-binding1.component.css']
})
export class EventBinding1Component implements OnInit {

  count:number=0;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    if(this.count==0){
      console.log("Click event Occur...");
      this.count++;
    }
    
  }

  onImage(){
    console.log("u R in onImage Method...");
  }

  OnClick1(myevent){
    console.log(myevent);
    console.log("=====> "+myevent.target.value)
  }

}
