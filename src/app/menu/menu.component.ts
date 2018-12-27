import { Component, OnInit } from '@angular/core';

import { Card } from '../shared/card';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  cards: Card;
  configUrl = 'assets/artifact_eng.json';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.cards = this.getConfig();
    console.log(this.cards);
  }
  
  getConfig() {
    return this.http.get(this.configUrl);
  }

}
