import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  strdetails:string='Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quaerat magnam saepe reprehenderit, molestias ducimus reiciendis id fugit eaque ab optio assumenda suscipit dolores nobis nesciunt doloribus dignissimos quasi autem!';
  
  constructor() { }

  ngOnInit() {
  }

}
