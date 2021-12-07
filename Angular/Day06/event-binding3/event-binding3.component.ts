import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-event-binding3',
  templateUrl: './event-binding3.component.html',
  styleUrls: ['./event-binding3.component.css']
})
export class EventBinding3Component implements OnInit {

  result:number=0;
  name:string='';

  constructor() { }

  ngOnInit() {
  }

  OnKeyUp(){
    console.log("Key Up Event Occur..")

  }

  onKeyDown(){
    console.log("Key Down Event Occur...");
  }

}
