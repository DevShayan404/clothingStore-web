import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {
  headers = [
    {
      id: 1,
      tittle: 'Unstitched',
      src: 'assets/images/unstitched.jpg',
    },
    {
      id: 1,
      tittle: 'Unstitched',
      src: 'assets/images/unstitched.jpg',
    },
    {
      id: 1,
      tittle: 'Unstitched',
      src: 'assets/images/unstitched.jpg',
    },
    {
      id: 1,
      tittle: 'Unstitched',
      src: 'assets/images/unstitched.jpg',
    },
    {
      id: 1,
      tittle: 'Unstitched',
      src: 'assets/images/unstitched.jpg',
    },
    {
      id: 1,
      tittle: 'Unstitched',
      src: 'assets/images/unstitched.jpg',
    },
    {
      id: 1,
      tittle: 'Unstitched',
      src: 'assets/images/unstitched.jpg',
    },
    {
      id: 1,
      tittle: 'Unstitched',
      src: 'assets/images/unstitched.jpg',
    },
    {
      id: 1,
      tittle: 'Unstitched',
      src: 'assets/images/unstitched.jpg',
    },
    {
      id: 1,
      tittle: 'Unstitched',
      src: 'assets/images/unstitched.jpg',
    },
    {
      id: 1,
      tittle: 'Unstitched',
      src: 'assets/images/unstitched.jpg',
    },
  ];
  cardList = [
    {
      id: 1,
      name: 'Printed Button Down Shirt',
      price: '2500.00',
      currency: 'Rs',
      badge: 'New',
      src: 'assets/images/unstitched-list.webp',
    },
    {
      id: 1,
      name: 'Printed Button Down Shirt',
      price: '2500.00',
      currency: 'Rs',
      badge: 'New',
      src: 'assets/images/unstitched-list.webp',
    },
    {
      id: 1,
      name: 'Printed Button Down Shirt',
      price: '2500.00',
      currency: 'Rs',
      badge: 'New',
      src: 'assets/images/unstitched-list.webp',
    },
    {
      id: 1,
      name: 'Printed Button Down Shirt',
      price: '2500.00',
      currency: 'Rs',
      badge: null,
      src: 'assets/images/unstitched-list.webp',
    },
    {
      id: 1,
      name: 'Printed Button Down Shirt',
      price: '2500.00',
      currency: 'Rs',
      badge: 'New',
      src: 'assets/images/unstitched-list.webp',
    },
  ];
  paramName: string | undefined;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe((params) => {
      this.paramName = params['name']!;
    });
  }
  ngOnInit(): void {}

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 8,
      },
    },
    nav: true,
  };
  routeToProductDetail(data: any) {
    this.router.navigate(['Home/' + this.paramName + '/Product']);
  }
}
