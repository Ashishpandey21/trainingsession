import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lacquering',
  templateUrl: './lacquering.component.html',
  styleUrls: ['./lacquering.component.css']
})
export class LacqueringComponent implements OnInit{
 imageSrc = ""
 routerDa: string | null;
 err = ""
  constructor(private router: ActivatedRoute, private route: Router) {
  }

  ngOnInit(): void {
    this.routerDa = this.router.snapshot.queryParamMap.get('router');
    if(Number(this.routerDa ) === 1) {
      this.imageSrc = "assets/images/image1.jpg"
    }
    if(Number(this.routerDa)  === 2) {
      this.imageSrc = "assets/images/image2.jpg"
    }
    if(Number(this.routerDa)  === 3) {
      this.imageSrc = "assets/images/image3.jpg"
    }
    if(Number(this.routerDa ) === 4) {
      this.imageSrc = "assets/images/image4.jpg"
    }
    if(Number(this.routerDa)  === 5) {
      this.imageSrc = "assets/images/image5.jpg"
    }
  }

  onClickCheckColor(data:string) {
    if(Number(this.routerDa) === 1 && data === "blue") {
      this.route.navigate(['/sfg-binning'])
    }
    if(Number(this.routerDa) === 2 && data === "blue") {
      this.route.navigate(['/sfg-binning'])
    }
    if(Number(this.routerDa) === 3 && data === "red") {
      this.route.navigate(['/sfg-binning'])
    }
    if(Number(this.routerDa) === 4 && data === "yellow") {
      this.route.navigate(['/sfg-binning'])
    }
    if(Number(this.routerDa) === 5 && data === "green") {
      this.route.navigate(['/sfg-binning'])
    }
    this.err = "Opps You failed selected wrong color";
  }



}
