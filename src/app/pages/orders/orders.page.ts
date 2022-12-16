import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  items:any=[
    {
      img:'../../../assets/images/frites.jpeg',
      name:'Bisted a la palmesano',
      quantity:'20',
      desc:'0',
      price:20
    },
    {
      img:'../../../assets/images/frites.jpeg',
      name:'Bisted a la palmesano',
      quantity:'20',
      desc:'0',
      price:10
    },
    {
      img:'../../../assets/images/frites.jpeg',
      name:'Bisted a la palmesano',
      quantity:'20',
      desc:'0',
      price:100
    },
    {
      img:'../../../assets/images/frites.jpeg',
      name:'Bisted a la palmesano',
      quantity:'20',
      desc:'0',
      price:150
    },
    {
      img:'../../../assets/images/frites.jpeg',
      name:'Bisted a la palmesano',
      quantity:'20',
      desc:'0',
      price:200
    },

  ]
  constructor(public userService:UserService) {
    this.userService.userLogin = true
  }

  ngOnInit() {
  }
  deleteOne(id:number){
    this.items.splice(id, 1);
  }
}
