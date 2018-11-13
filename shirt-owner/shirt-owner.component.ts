import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shirt-owner',
  templateUrl: './shirt-owner.component.html',
  styleUrls: ['./shirt-owner.component.css']
})
export class ShirtOwnerComponent implements OnInit {
  shirtList = [
    {
      name: 'Red Shirt',
      price: 250,
      image: 'https://images-na.ssl-images-amazon.com/images/I/71e%2BPwfDV8L._UX385_.jpg',
    },
    {
      name: 'Blue Shirt',
      price: 250,
      image: 'https://images-na.ssl-images-amazon.com/images/I/71-x0qqr2-L._UX385_.jpg',
    },
    {
      name: 'Green Shirt',
      price: 250,
      image: 'https://images-na.ssl-images-amazon.com/images/I/71zlRXizASL._UX385_.jpg',
    },
    {
      name: 'White Shirt',
      price: 250,
      image: 'https://images-na.ssl-images-amazon.com/images/I/51kmHZbPB7L._UX342_.jpg',
    }
  ];
  shirtIndex : number;  


  constructor() { }

  ngOnInit() {
  }

}
