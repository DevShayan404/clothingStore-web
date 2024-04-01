import {
  ChangeDetectorRef,
  Component,
  OnInit,
  Renderer2,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  cardData = [
    {
      title: 'Explore All',
      img1: 'assets/images/exploreAll.jpg',
      img2: 'assets/images/women2.jpg',
      img1Loaded: false,
      img2Loaded: false,
      isHovered: false,
    },
    {
      title: 'Women',
      img1: 'assets/images/women1.jpg',
      img2: 'assets/images/women2.jpg',
      img1Loaded: false,
      img2Loaded: false,
      isHovered: false,
    },

    {
      title: 'Men',
      img1: 'assets/images/men1.jpg',
      img2: 'assets/images/men2.jpg',
      img1Loaded: false,
      img2Loaded: false,
      isHovered: false,
    },
    {
      title: 'Boy',
      img1: 'assets/images/boy1.jpg',
      img2: 'assets/images/boy2.jpg',
      img1Loaded: false,
      img2Loaded: false,
      isHovered: false,
    },
    {
      title: 'Girl',
      img1: 'assets/images/girl1.jpg',
      img2: 'assets/images/girl2.jpg',
      // img1Loaded: false,
      // img2Loaded: false,
      isHovered: false,
    },
  ];

  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    // this.preloadImages().then(() => {
    //   this.cdr.detectChanges();
    // });
  }

  // preloadImages(): Promise<any> {
  //   const promises = this.cardData.map((card, index) => {
  //     return new Promise<void>((resolve) => {
  //       const img1 = new Image();
  //       const img2 = new Image();

  //       img1.onload = img2.onload = () => {
  //         this.cardData[index].img1Loaded = true;
  //         this.cardData[index].img2Loaded = true;
  //         resolve();
  //       };

  //       img1.src = card.img1;
  //       img2.src = card.img2;
  //     });
  //   });

  //   return Promise.all(promises);
  // }

  handleHover(index: number, isHovered: boolean): void {
    this.cardData[index].isHovered = isHovered;
  }

  routeToCollection(data: any) {
    this.router.navigate(['Home', data?.title]);
  }
}
