import { Component, EventEmitter, Input, Output } from '@angular/core';
import { City } from 'src/app/models/cities';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent {
  @Input()
  city!: City;
  @Output() visitNow = new EventEmitter<string>();
  onVisit() {
    this.visitNow.emit(this.city.name);
    console.log(this.city.name)
  }  
}
