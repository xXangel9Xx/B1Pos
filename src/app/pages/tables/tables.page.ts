import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.page.html',
  styleUrls: ['./tables.page.scss'],
})
export class TablesPage implements OnInit {
  items:any=[
    {id:1, check:false, classBackground:'color-1'},
    {id:2, check:true, classBackground:'color-2'},
    {id:3, check:false, classBackground:'color-1'},
    {id:4, check:false, classBackground:'color-2'},
    {id:5, check:true, classBackground:'color-1'},
    {id:6, check:false, classBackground:'color-2'},
    {id:7, check:false, classBackground:'color-3'},
    {id:8, check:true, classBackground:'color-4'},
    {id:9, check:false, classBackground:'color-3'},
    {id:10, check:true, classBackground:'color-4'},
    {id:11, check:false, classBackground:'color-3'},
    {id:12, check:false, classBackground:'color-4'}
  ]   
  constructor(public userService: UserService) {
      this.userService.userLogin=true
  }

  ngOnInit() {
  }

  changeCheck(id:number){
    return this.items[id].check = !this.items[id].check
  }

  addTable(){
    let cont = 0
    let newTable = {
      id:this.items.length+1,
      check:false,
      classBackground:''
    }

    if(this.items.length <= 5){
      if(this.items[this.items.length-1].classBackground=='color-1'){
        newTable['classBackground']="color-2"
      }        
      if(this.items[this.items.length-1].classBackground=='color-2' || this.items[this.items.length-1].classBackground==''){
        newTable['classBackground']="color-1"
      }        
    }

    
    if(this.items.length>5){
        for (let index = 1; index < 6; index++) {
            if(this.items[this.items.length-index].classBackground == this.items[this.items.length-1].classBackground){
              cont+=1
              if(cont==3){
                if(this.items[this.items.length-1].classBackground=='color-4'){
                  newTable['classBackground']="color-1"
                }
                if(this.items[this.items.length-1].classBackground=='color-2'){
                  newTable['classBackground']="color-3"
                }
            } else{
                if(this.items[this.items.length-1].classBackground=='color-1' ){
                  newTable['classBackground']="color-2"
                }

                if(this.items[this.items.length-1].classBackground=='color-2' ){
                  newTable['classBackground']="color-1"
                }
                if(this.items[this.items.length-1].classBackground=='color-3' ){
                  newTable['classBackground']="color-4"
                }          
                if(this.items[this.items.length-1].classBackground=='color-4' ){
                  newTable['classBackground']="color-3"
                }
             }
            }      
        }
    }
     this.items.push(newTable)
  }
}
