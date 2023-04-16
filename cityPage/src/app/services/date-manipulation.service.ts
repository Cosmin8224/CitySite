import { Injectable } from '@angular/core';
import { City } from '../models/cities';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataManipulationService {

  constructor() {}

  cities: City[]=[
    { name: 'Bucuresti', image: '/assets/images/bucuresti.jpg', description: 'The city of all possibilities' },
    { name: 'Ramnicu Valcea', image: '/assets/images/Ramnicu-valcea.jpg', description: 'The cleanest in the world'},
    { name: 'Cluj', image: '/assets/images/Cluj.jpg', description: 'Programmers heaven'},
    { name: 'Brasov', image: '/assets/images/Brasov.jpg', description: 'The city of many wonders' },
    { name: 'Sibiu', image: '/assets/images/Sibiu.jpg', description: 'Just amazing'},
    { name: 'Timisoara', image: '/assets/images/Timisoara.jpg', description: 'The capital of history'}
  ];

  private bigTitleSubject = new BehaviorSubject<string>('New Adventure');
  bigTitle$ = this.bigTitleSubject.asObservable();

  setBigTitle(name: string) {
    this.bigTitleSubject.next(name);
  }

  getCities(){
    return this.cities
  };

}
