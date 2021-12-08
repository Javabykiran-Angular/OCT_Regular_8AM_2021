import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifordirective',
  templateUrl: './ifordirective.component.html',
  styleUrls: ['./ifordirective.component.css']
})
export class IfordirectiveComponent implements OnInit {

  arrobj=[
    {
      name:"Samsung",
      price:18000,
      quantity:2
    },
    {
      name:"OnePlus",
      price:38000,
      quantity:1
    },
    {
      name:"Motorolla",
      price:300000,
      quantity:1
    },
    {
      name:"RealMe",
      price:15000,
      quantity:3
    },    
        
  ];

  constructor() { }

  ngOnInit() {
  }

  onMouseOver(){
    console.log("Mouse over event Occur....");
  }
  onMouseOut(){
    console.log("Mouse Out event Occur ====>>>>");
  }

}
