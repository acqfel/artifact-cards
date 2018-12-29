import { Component, OnInit } from '@angular/core';

import { Card, CardList } from '../shared/card';
import { CARDS } from '../shared/cards';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

  cards: Card = CARDS;
  selectedCard: CardList = this.cards.card_set.card_list[0];
  
  constructor() { }

  ngOnInit() {
  }
  
  getText(text: string) : string {
    let div = document.createElement('div');
    div.innerHTML = text;
    
    let arrText = [];
    div.childNodes.forEach(e => arrText.push(e.textContent));
    
    return arrText[0];
  }

}
