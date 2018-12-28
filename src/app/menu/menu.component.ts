import { Component, OnInit } from '@angular/core';

import { Card, CardList } from '../shared/card';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  cards: Card = {
  "card_set": {
    "version": 1,
    "set_info": {
      "set_id": 1,
      "pack_item_def": 1000,
      "name": {
        "english": "Call to Arms",
        "spanish": "Llamamiento a las armas",
        "portuguese": "Call to Arms",
        "brazilian": "Convocação de Guerra",
        "latam": "Llamamiento a las armas"
      }
    },
    "card_list": [
      {
        "card_id": 10001,
        "base_card_id": 10001,
        "card_type": "Hero",
        "mini_image": {
          "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10001.c2456641c9dd1b758dd7a0caf5e2a56f727a51f8.png"
        },
        "ingame_image": {
          "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10001_ingame.1c347d3e7359e39d7ca61f6add8b06604b9ecffd.png"
        },
        "illustrator": "JiHun Lee",
        "rarity": "Common",
        "is_blue": true,
        "item_def": 110001,
        "attack": 2,
        "hit_points": 6,
        "references": [
          {
            "card_id": 10002,
            "ref_type": "includes",
            "count": 3
          },
          {
            "card_id": 10491,
            "ref_type": "passive_ability"
          }
        ],
        "armor": null,
        "english": "<span style='font-weight:bold;color:#ffffff;'>Venomous Nature</span><br/>Summon a <span style='font-weight:bold;color:#ffffff;'>Plague Ward</span> into Venomancer's lane each deployment phase.",
        "charges": null,
        "gold_cost": null,
        "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10001.c2456641c9dd1b758dd7a0caf5e2a56f727a51f8.png",
        "is_black": null,
        "is_crosslane": null,
        "is_green": null,
        "is_quick": null,
        "is_red": null,
        "mana_cost": null,
        "sub_type": null
        }
      ]
    }
  }
  
  cardList: CardList = this.cards.card_set.card_list[0];
  
  constructor() { }

  ngOnInit() {
    console.log(this.cards);
  }
  
  
}
