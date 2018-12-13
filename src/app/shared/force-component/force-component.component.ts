import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-force-component',
  templateUrl: './force-component.component.html',
  styleUrls: ['./force-component.component.scss']
})
export class ForceComponentComponent implements OnInit {
  @Input() force: number;
  amountOfForce: number;
  forceString: string;
  constructor() { }

  ngOnInit() {
    // console.log(this.force);
    this.force = this.force*12;
    this.forceString = `${this.force}px`;
    // console.log(this.forceString);

  }

}
