export interface OutfitsDataType {
    id?: number;
    gender: string;
    outfitCategory: string;
    season: string;
    colorSkin: string;
    age: number | RangeObject;
    Height: number | RangeObject;
    weight: number | RangeObject;
    budget: number;
    name?: string;
    ecoFriendly: string;
    image_path?: string;
}

export type RangeObject = {
    min: number;
    max: number;
  }