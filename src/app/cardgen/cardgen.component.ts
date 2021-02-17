import { Component, OnInit } from '@angular/core';
import { Cardgen } from '../interfaces/cardgen';

@Component({
  selector: 'app-cardgen',
  templateUrl: './cardgen.component.html',
  styleUrls: ['./cardgen.component.css']
})
export class CardgenComponent implements OnInit {

  cards: Cardgen[] = [
    {
      title: "Elvish Mystic",
    cost: "G",
    type: "Creature - Elf Druid",
    gametext: "Tap: Add G.",
    flavortext: "'Life grows everywhere. My kin merely find those places where it grows strongest.' —Nissa Revane",
    pt: "1 / 1",
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
