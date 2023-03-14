import { Component } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor( private Carinfo: CarsService) { }
data:any
  ngOnInit(): void {
   this.cars()
  }
 
  cars() {
    this.Carinfo.carifoget().subscribe((res: any) => {

      
      if (res.success) {
console.log(res.data);

        this.data = res.data
      } else {
        alert(res.message)
      }
    }, (err) => {
      console.log(err);
    })
  }
}
