import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nv-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  brands = [
    { label: 'Himalaya', image: 'himalaya.jpg', icon: 'himalaya_logo.jpg' },
    { label: 'Marlboro', image: 'marlboro.jpg', icon: 'marlboro_logo.png' },
    { label: 'Titan', image: 'titan.jpg', icon: 'titan_logo.png' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
