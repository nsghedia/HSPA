import { Component, Input } from "@angular/core";
import { IProperty } from "../IProperty.inteface";


@Component({
    selector:'app-property-card',
    templateUrl:'property-card.component.html',
    styleUrls:['property-card.component.css']
})
export class PropertyCardComponent{
    @Input() property:IProperty;
    // Property:any={
    //     "Id":1,
    //     "Type":"House",
    //     "Price":"12000"
    // }
}