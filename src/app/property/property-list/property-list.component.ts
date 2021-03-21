
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/Services/housing.service';
import { IProperty } from '../IProperty.inteface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Propertes:Array<IProperty>=[]; 

  constructor(private housingservice:HousingService) { }

  ngOnInit(): void {
    this.housingservice.getAllProperties().subscribe(
      data=>{
            this.Propertes=data;
            console.log(data);
          },error=>{
      console.log(error);
    }
    );
  }
}
