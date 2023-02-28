import { Component } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-buy-use-car',
  templateUrl: './buy-use-car.component.html',
  styleUrls: ['./buy-use-car.component.scss']
})
export class BuyUseCarComponent {
    constructor( private router: Router, private route: ActivatedRoute){}
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
      numVisible: 1
  }
];
id:any
ngOnInit() {
    this.id= this.route.snapshot.paramMap.get('_id');
    console.log(this.id);
    
    
    }
}
