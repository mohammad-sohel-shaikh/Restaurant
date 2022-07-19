import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/service/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  foodData:any;
  constructor(private service:OrderDetailsService) {
    this.foodData=this.service.foodDetails
  }

  ngOnInit(): void {
  }

}
