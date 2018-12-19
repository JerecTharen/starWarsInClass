import { Component, OnInit } from '@angular/core';
import {Character} from "../../app-character-list/characterInterface";

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  character: Character;

  constructor() { }

  ngOnInit() {}


}
