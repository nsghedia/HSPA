import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  private PropertyId : number = 0;
  
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    // this.PropertyId= +this.route.snapshot.params['id'] //Here + use to convert string value to number
    this.PropertyId=Number(this.route.snapshot.params['id'])

    this.route.params.subscribe(
      (params)=>{
        this.PropertyId= +params['id']
      }
    )
  }

  onNext(){
    this.PropertyId+=1;
    //also you can use -> this.router.navigate(['property-detail/'+this.PropertyId]);
    this.router.navigate(['property-detail',this.PropertyId]);
  }



}
