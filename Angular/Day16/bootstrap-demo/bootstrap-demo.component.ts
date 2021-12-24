import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-demo',
  templateUrl: './bootstrap-demo.component.html',
  styleUrls: ['./bootstrap-demo.component.css']
})
export class BootstrapDemoComponent implements OnInit {

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

}
