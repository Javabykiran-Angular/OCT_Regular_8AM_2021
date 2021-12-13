import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuild-pipe',
  templateUrl: './inbuild-pipe.component.html',
  styleUrls: ['./inbuild-pipe.component.css']
})
export class InbuildPipeComponent implements OnInit {

  strData:string='Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quibusdam aspernatur maxime eaque veritatis quaerat ipsam, facere sapiente necessitatibus consequatur quia quos distinctio! Pariatur ex, iure exercitationem eaque sapiente nulla!';

  num2:number=5.689523742;
  mydate=new Date();
  constructor() { }

  ngOnInit() {
  }

}
