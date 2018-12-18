import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {CharacterService} from "../character/character.service";

@Component({
  selector: 'app-app-sidenav-content',
  templateUrl: './app-sidenav-content.component.html',
  styleUrls: ['./app-sidenav-content.component.scss']
})
export class AppSidenavContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
