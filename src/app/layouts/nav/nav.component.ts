import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor(public router: Router) {}
  link1:any
  link2:any
  link3:any

ngOnInit(){
  if(this.router.url=="/home"){
    this.link1="active"
    this.link2=""
    this.link3=""
  }else if(this.router.url=="/about"){
    this.link2="active"
    this.link3=""
    this.link1=""
  }
  else if(this.router.url=="/contact"){
    this.link3="active"
    this.link2=""
    this.link1=""
  }
}


li1(){
  this.ngOnInit()
  this.router.navigate(["/home"])
  this.link1="active"
  this.link2=""
  this.link3=""
}
li2(){
  this.ngOnInit()
  this.router.navigate(["/about"])
  this.link2="active"
  this.link3=""
  this.link1=""
}
li3(){
  this.ngOnInit()
  this.router.navigate(["/contact"])
 this.link3="active"
    this.link2=""
    this.link1=""
}

}
