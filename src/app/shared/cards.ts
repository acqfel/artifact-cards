import { Card } from './card';

export const CARDS: Card = {
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
        "sub_type": null,
        "comments": [
            {
                rating: 5,
                comment: 'Comment Test',
                author: 'Author Test',
                date: '2012-10-16T17:57:28.556094Z'
            }
          ]
        },
        {
        "card_id": 10491,
        "base_card_id": 10491,
        "card_type": "Passive Ability",
        "mini_image": {},
        "ingame_image": {},
        "references": [
          {
            "card_id": 10003,
            "ref_type": "references"
          }
        ],
        "armor": null,
        "attack": null,
        "english": "Summon a <span style='font-weight:bold;color:#ffffff;'>Plague Ward</span> into Venomancer's lane each deployment phase.",
        "charges": null,
        "gold_cost": null,
        "hit_points": null,
        "illustrator": null,
        "default": null,
        "is_black": null,
        "is_blue": null,
        "is_crosslane": null,
        "is_green": null,
        "is_quick": null,
        "is_red": null,
        "item_def": null,
        "mana_cost": null,
        "rarity": null,
        "sub_type": null,
        "comments": [
            {
                rating: 5,
                comment: 'Comment Test',
                author: 'Author Test',
                date: '2012-10-16T17:57:28.556094Z'
            }
          ]
      },
      {
        "card_id": 10002,
        "base_card_id": 10002,
        "card_type": "Spell",
        "mini_image": {
          "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10002.68a876b165ec268ce38d3681a4c3a94a5cbc6a53.png"
        },
        "ingame_image": {},
        "illustrator": "JiHun Lee",
        "is_blue": true,
        "mana_cost": 4,
        "references": [
          {
            "card_id": 10003,
            "ref_type": "references"
          }
        ],
        "armor": null,
        "attack": null,
        "english": "Summon two <span style='font-weight:bold;color:#ffffff;'>Plague Wards</span>.",
        "charges": null,
        "gold_cost": null,
        "hit_points": null,
        "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10002.68a876b165ec268ce38d3681a4c3a94a5cbc6a53.png",
        "is_black": null,
        "is_crosslane": null,
        "is_green": null,
        "is_quick": null,
        "is_red": null,
        "item_def": null,
        "rarity": null,
        "sub_type": null,
        "comments": [
            {
                rating: 5,
                comment: 'Comment Test',
                author: 'Author Test',
                date: '2012-10-16T17:57:28.556094Z'
            }
          ]
      },
      {
        "card_id": 10003,
        "base_card_id": 10003,
        "card_type": "Creep",
        "mini_image": {
          "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10003.776af3d9fa1c77d9e8066038861660153cc9f6b3.png"
        },
        "ingame_image": {},
        "illustrator": "JiHun Lee",
        "is_blue": true,
        "mana_cost": 3,
        "attack": 1,
        "hit_points": 3,
        "references": [],
        "armor": null,
        "english": "Before the action phase, deal 2 piercing damage to a random enemy neighbor of Plague Ward.",
        "charges": null,
        "gold_cost": null,
        "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10003.776af3d9fa1c77d9e8066038861660153cc9f6b3.png",
        "is_black": null,
        "is_crosslane": null,
        "is_green": null,
        "is_quick": null,
        "is_red": null,
        "item_def": null,
        "rarity": null,
        "sub_type": null,
        "comments": [
            {
                rating: 5,
                comment: 'Comment Test',
                author: 'Author Test',
                date: '2012-10-16T17:57:28.556094Z'
            }
          ]
      },
      {
        "card_id": 10004,
        "base_card_id": 10004,
        "card_type": "Hero",
        "mini_image": {
          "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10004.8e77e6463c971dab1fa01b3761808eb2cf5163b0.png"
        },
        "ingame_image": {
          "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10004_ingame.abad49f30c45897120d06d3bef0db20798800c49.png"
        },
        "illustrator": "Wisnu Tan",
        "rarity": "Rare",
        "is_blue": true,
        "item_def": 110004,
        "attack": 4,
        "hit_points": 5,
        "references": [
          {
            "card_id": 10005,
            "ref_type": "includes",
            "count": 3
          },
          {
            "card_id": 10429,
            "ref_type": "active_ability"
          },
          {
            "card_id": 10490,
            "ref_type": "passive_ability"
          }
        ],
        "armor": null,
        "english": "<span style='font-weight:bold;color:#ffffff;'>Poof</span><br/><span style='font-weight:bold;color:#ffffff;'>Active 2:</span> Move Meepo to an allied <span style='font-weight:bold;color:#ffffff;'>Meepo</span>'s lane.  Deal 2 damage to the new enemy neighbors.<BR/>\n<BR/>\n<span style='font-weight:bold;color:#ffffff;'>United We Fall</span><br/>Meepo has Soulbound. (If Meepo dies, other allied Meepos in every lane also die.)",
        "charges": null,
        "gold_cost": null,
        "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10004.8e77e6463c971dab1fa01b3761808eb2cf5163b0.png",
        "is_black": null,
        "is_crosslane": null,
        "is_green": null,
        "is_quick": null,
        "is_red": null,
        "mana_cost": null,
        "sub_type": null,
        "comments": [
            {
                rating: 5,
                comment: 'Comment Test',
                author: 'Author Test',
                date: '2012-10-16T17:57:28.556094Z'
            }
          ]
        }
      ]
    }
  }