import { wand } from "./wand-interface";

export interface ICharacter{
    name?: string;
    species?: string;
    gender?: string;
    house?: string;
    dateOfBirth?: string;
    yearOfBirth?: number;
    ancestry?: string;
    eyeColour?: string;
    hairColour?: string;
    wand?: wand;
    patronus?: string;
    hogwartsStudent?: boolean;
    hogwartsStaff?: boolean;
    actor?: string;
    alive?: boolean;
    image?: string;
    age?:number;
}


