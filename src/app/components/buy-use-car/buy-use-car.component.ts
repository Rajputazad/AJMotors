import { Component } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-buy-use-car',
  templateUrl: './buy-use-car.component.html',
  styleUrls: ['./buy-use-car.component.scss']
})
export class BuyUseCarComponent {
    constructor( private router: Router, private route: ActivatedRoute,private Carinfo: CarsService){}
    data=[
    {
        "previewImageSrc": "https://imgd.aeplcdn.com/640X480/cw/ucp/stockApiImg/L3MDGUM_fa59dc3b96f8424485f4e2c696979c9a_1_27550395.jpg?q=75",
        "thumbnailImageSrc": "https://imgd.aeplcdn.com/640X480/cw/ucp/stockApiImg/L3MDGUM_fa59dc3b96f8424485f4e2c696979c9a_1_27550395.jpg?q=75",
        "alt": "Description for Image 1",
        "title": "Title 1"
    },
    {
        "previewImageSrc": "https://imgd.aeplcdn.com/1024x768/cw/ucp/stockApiImg/GK3CE4T_fa59dc3b96f8424485f4e2c696979c9a_1_27550397.jpg?q=75",
        "thumbnailImageSrc": "https://imgd.aeplcdn.com/1024x768/cw/ucp/stockApiImg/GK3CE4T_fa59dc3b96f8424485f4e2c696979c9a_1_27550397.jpg?q=75",
        "alt": "Description for Image 2",
        "title": "Title 2"
    },
    
    {
        "previewImageSrc": "https://imgd.aeplcdn.com/1024x768/cw/ucp/stockApiImg/DQ5GDGX_fa59dc3b96f8424485f4e2c696979c9a_1_27550398.jpg?q=75",
        "thumbnailImageSrc": "https://imgd.aeplcdn.com/1024x768/cw/ucp/stockApiImg/DQ5GDGX_fa59dc3b96f8424485f4e2c696979c9a_1_27550398.jpg?q=75",
        "alt": "Description for Image 4",
        "title": "Title 4"
    },
    {
        "previewImageSrc": "https://imgd.aeplcdn.com/1024x768/cw/ucp/stockApiImg/LITX6LR_fa59dc3b96f8424485f4e2c696979c9a_1_27550399.jpg?q=75",
        "thumbnailImageSrc": "https://imgd.aeplcdn.com/1024x768/cw/ucp/stockApiImg/LITX6LR_fa59dc3b96f8424485f4e2c696979c9a_1_27550399.jpg?q=75",
        "alt": "Description for Image 4",
        "title": "Title 5"
    },
    {
        "previewImageSrc": "https://imgd.aeplcdn.com/1024x768/cw/ucp/stockApiImg/7JUBGHV_fa59dc3b96f8424485f4e2c696979c9a_1_27550405.jpg?q=75",
        "thumbnailImageSrc": "https://imgd.aeplcdn.com/1024x768/cw/ucp/stockApiImg/7JUBGHV_fa59dc3b96f8424485f4e2c696979c9a_1_27550405.jpg?q=75",
        "alt": "Description for Image 4",
        "title": "Title 6"
    },
   
]
responsiveOptions:any[] = [
  {
      breakpoint: '2024px',
      numVisible: 3
  },
  {
      breakpoint: '1024px',
      numVisible: 4
  },
  {
      breakpoint: '768px',
      numVisible: 3
  },
  {
      breakpoint: '560px',
      numVisible: 2
  }
];
id:any;
car: any;
ngOnInit() {
    this.id= this.route.snapshot.paramMap.get('_id');
    if(this.id==0){

    }else{

        console.log(this.id);
        this.Carinfo.getCars().subscribe(data => {
            console.log(data.cars[0].id);
            
            console.log(this.id);   
            this.car = data.cars.find((car:any) => car.id == this.id);
            console.log(this.car);
            
          });
    }
    }
    
    }
    

