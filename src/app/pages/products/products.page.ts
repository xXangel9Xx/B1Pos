import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  public form : FormGroup;
  search:any=[]
  items:any=[
    {
      id:1,
      img:'../../../assets/images/frites.jpeg',
      name:'Pera',
      price:200,
      quantity:1
    },
    {
      id:2,
      img:'../../../assets/images/frites.jpeg',
      name:'Bisted a la palmesano',
      price:200,
      quantity:1
    },
    {
      id:3,
      img:'../../../assets/images/frites.jpeg',
      name:'Pera',
      price:200,
      quantity:1
    },
  ]
  constructor(
    public userService:UserService,public formBuilder: FormBuilder
  ) { 
    this.userService.userLogin=true,
    this.form = this.formBuilder.group({
      search: ['',[Validators.required]],
    });
  }

  ngOnInit() {
  }
  logForm(){
    if(this.form.valid){
      const result = this.items.filter((item:any) => item.name == this.form.value.search);
      this.search = result
      /* >>>>>> Post Example  <<<<<<<< */
      // this.http.post('urlExample',this.form).toPromise().then(resJson=>{
        // console.log(resJson)
        // this.form.reset()
      // }).catch(errorMessages=>{
        // console.log(errorMessages)
        // this.form.reset()
      // }).finally()    
    }
  }

  aument(i:number){
    if(this.form.value.search.trim().length !== 0){
      return  this.search[i].quantity+=1
    }
    return this.items[i].quantity += 1
  }
  decrement(i:number){

    if(this.form.value.search.trim().length !== 0 && this.search[i].quantity>1 ){
      return this.search[i].quantity-=1
    }
    if(this.items[i].quantity <= 1 || this.form.value.search.trim().length !== 0 && this.search[i].quantity<=1){
      return this.items[i].quantity = 1
    }
    return this.items[i].quantity -= 1
  }
}
