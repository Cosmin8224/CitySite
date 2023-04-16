import { Component, EventEmitter, Output } from '@angular/core';
import { City } from 'src/app/models/cities';
import { DataManipulationService } from 'src/app/services/date-manipulation.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchQuery!: string;

  @Output()
  cities!: City[];

  constructor(private dateManipulationService: DataManipulationService) { }

  search() {
    const filteredCities = this.dateManipulationService.getCities().filter(city => 
      city.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.cities = filteredCities;
  }
}
