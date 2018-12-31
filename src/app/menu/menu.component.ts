import { Component, OnInit } from '@angular/core';

import { Card, CardList } from '../shared/card';
import { CARDS } from '../shared/cards';

import { CardService } from '../services/card.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  // without service
  //cards: Card = CARDS;
  
  // with service
  cards: Card;
  
  //cardList: CardList = this.cards.card_set.card_list[0];
  selectedCard: CardList;
  
  constructor(private cardService: CardService) { }

  ngOnInit() {
    console.log(this.cards);
    this.cards = this.cardService.getCards();
    this.selectedCard = this.cards.card_set.card_list[0];
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
