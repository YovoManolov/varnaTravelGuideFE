import { Place } from './place';

export class Hotel {
    static hotelFromJSON(data: any) {
      throw new Error("Method not implemented.");
    }

    _id: string;
    place_id: string;
    numbOfStars: number;
    place: Place;
}
