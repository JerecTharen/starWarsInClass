import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-force-change-dialog',
  templateUrl: './force-change-dialog.component.html',
  styleUrls: ['./force-change-dialog.component.scss']
})
export class ForceChangeDialogComponent implements OnInit {

  force: number;

  constructor(private dialogRef: MatDialogRef<ForceChangeDialogComponent>, @Inject(MAT_DIALOG_DATA) private data) { }

  onNoClick(){

  }

  ngOnInit() {
  }

}
