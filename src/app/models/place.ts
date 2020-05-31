import { WorkHours } from './work-hours';
import { Point } from './point';
import { Image } from './image';

export class Place {
   
    _id: string ;
    name: string;	
    address: string;
	location: Point;
    contacts: string;
    description: string;
    typeOfPlace: number;
    images: Array<Image>;
    workHours: WorkHours;
    priceCategoryDescription: string;

}
