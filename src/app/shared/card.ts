export interface Name {
    english: string;
    spanish: string;
    portuguese: string;
    brazilian: string;
    latam: string;
}

export interface SetInfo {
    set_id: number;
    pack_item_def: number;
    name: Name;
}

export interface MiniImage {
    default: string;
}

export interface IngameImage {
    default: string;
}

export interface Reference {
    card_id: number;
    ref_type: string;
    count?: number;
}

export interface CardList {
    card_id: number;
    base_card_id: number;
    card_type: string;
    mini_image: MiniImage;
    ingame_image: IngameImage;
    illustrator: string;
    rarity: string;
    is_blue: boolean;
    item_def: number;
    attack: number;
    hit_points: number;
    references: Reference[];
    armor?: any;
    english: string;
    charges?: any;
    gold_cost?: any;
    default: string;
    is_black?: any;
    is_crosslane?: any;
    is_green?: any;
    is_quick?: any;
    is_red?: any;
    mana_cost?: any;
    sub_type?: any;
}

export interface CardSet {
    version: number;
    set_info: SetInfo;
    card_list: CardList[];
}

export interface Card {
    card_set: CardSet;
}

