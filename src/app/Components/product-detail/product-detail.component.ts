import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
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
  ];
  productDetail = [
    {
      name: 'Design Detail',
      content: 'Long length button down shirt with a pointed collar design',
    },
    {
      name: 'Material',
      content: 'Crepe, 100 % Viscose',
    },
    {
      name: 'Stretct',
      content: 'None',
    },
    {
      name: 'Hand feel',
      content: 'Soft',
    },
    {
      name: 'Occassion',
      content: 'Daily casual, work, evening',
    },
    {
      name: 'Size & Fit',
      content: 'Model is wearing size "SMALL"',
    },
  ];
  panels = [
    {
      active: false,
      name: 'Care Instructions',
      childPanel: {
        detail:
          'Wash light and bright colors separately. Do not bleach. Do not twist/wring, warm iron to sequined, beaded, and delicate fabrics. Do not dry in direct sunlight.',
      },
    },
    {
      active: true,
      name: 'Disclaimer',
      childPanel: {
        detail:
          'Actual colors of the product may vary from the colors being displayed on your device.',
      },
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
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
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
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: true,
  };
  relatedProductCarousel: OwlOptions = {
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
        items: 4,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  imageHeight = '85vh';
  quantity: number = 1;

  routeToCheckout() {
    this.router.navigate(['Home/' + this.paramName + '/Product' + '/Checkout']);
  }
}
