import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/service/order-details.service';


@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.scss']
})
export class MenupageComponent implements OnInit {
  menuId:any;
  menuData:any;
  constructor(private activateroute:ActivatedRoute,private service:OrderDetailsService) {}

  ngOnInit(): void {
    this.menuId=this.activateroute.snapshot.paramMap.get('id');
    console.log(this.menuId,"menuID");
    if(this.menuId)
    {
      this.menuData=this.service.foodDetails.filter((value)=>{
        return value.id==this.menuId;
      })
    }
  }


}
