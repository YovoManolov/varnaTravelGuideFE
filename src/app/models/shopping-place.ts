import { Place } from './place';

export class ShoppingPlace {
    
    _id: string;
    place: Place;

    constructor (place: Place) {
        this.place = place
        this._id = place._id
    }
}
