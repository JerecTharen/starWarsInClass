import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatDialog} from "@angular/material";
import {ForceChangeDialogComponent} from "./force-change-dialog/force-change-dialog.component";

@Component({
  selector: 'app-force-component',
  templateUrl: './force-component.component.html',
  styleUrls: ['./force-component.component.scss']
})
export class ForceComponentComponent implements OnInit {
  @Input() force: number;
  @Output() onForceChange: EventEmitter<number> = new EventEmitter();
  amountOfForce: number;
  forceString: string;

  constructor(private dialog: MatDialog) { }

  onForceClick(){
    this.dialog.open(ForceChangeDialogComponent, {
      width: "400px",
      data: {force: this.force}
    });
    console.log("it works");
  }

  ngOnInit() {
    // console.log(this.force);
    this.force = this.force*12;
    this.forceString = `${this.force}`;
    // console.log(this.forceString);

  }

}
