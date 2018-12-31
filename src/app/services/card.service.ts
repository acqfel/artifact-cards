import { Injectable } from '@angular/core';
import { Card, CardList } from '../shared/card';
import { CARDS } from '../shared/cards';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }
  
  getCards(): Card {
    return CARDS;
  }
  
}
