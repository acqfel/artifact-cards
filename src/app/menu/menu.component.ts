import { Component, OnInit } from '@angular/core';

import { Card, CardList } from '../shared/card';
import { CARDS } from '../shared/cards';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  cards: Card = CARDS;
  
  //cardList: CardList = this.cards.card_set.card_list[0];
  selectedCard: CardList = this.cards.card_set.card_list[0];
  
  constructor() { }

  ngOnInit() {
    console.log(this.cards);
  }
  
  getText(text: string) : string {
    let div = document.createElement('div');
    div.innerHTML = text;
    
    let arrText = [];
    div.childNodes.forEach(e => arrText.push(e.textContent));
    
    return arrText[0];
  }
  
  onSelect(card: CardList) {
    this.selectedCard = card;
  }
  
}
