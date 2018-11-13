import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shirt-list',
  templateUrl: './shirt-list.component.html',
  styleUrls: ['./shirt-list.component.css']
})
export class ShirtListComponent implements OnInit {
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
 
 
  constructor() { }

  ngOnInit() {
  }

}
