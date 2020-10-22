import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.scss']
})
export class CalculateComponent implements OnInit {
 five = 5;
 six = 6;
 sum;

  constructor() { }

  ngOnInit() {
  }
  addition(){
    this.sum = this.five + this.six;
  }
}
