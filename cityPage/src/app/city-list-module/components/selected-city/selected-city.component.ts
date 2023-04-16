import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selected-city',
  templateUrl: './selected-city.component.html',
  styleUrls: ['./selected-city.component.scss']
})
export class SelectedCityComponent {
  @Input()
  selectedCityName!: string;
}
