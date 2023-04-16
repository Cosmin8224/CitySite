import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataManipulationService } from 'src/app/services/date-manipulation.service';

@Component({
  selector: 'app-title-panel',
  templateUrl: './title-panel.component.html',
  styleUrls: ['./title-panel.component.scss']
})
export class TitlePanelComponent implements OnInit{
  public bigTitle = 'New Adventure';
  

  constructor(private router: Router, private titleService: DataManipulationService){

  };

  ngOnInit(){
    
    this.titleService.bigTitle$.subscribe((title) => {
      this.bigTitle = title;
    });
  }
  
  discoverNow(): void {
    this.router.navigate(['/cities'])
  }


}
