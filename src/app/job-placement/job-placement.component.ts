import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { StartCyclePopupComponent } from '../start-cycle-popup/start-cycle-popup.component';


@Component({
  selector: 'app-job-placement',
  templateUrl: './job-placement.component.html',
  styleUrls: ['./job-placement.component.css']
})
export class JobPlacementComponent implements OnInit{


  buttonValue: string | null ;

  errorMessage: string = '';

  showLoader:boolean =  false;

  showButton: boolean =  false;

  IdReading : any;

  odReading : any



  constructor(public dialog: MatDialog,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.buttonValue = this.route.snapshot.queryParamMap.get('value');
  }
  matchSelection(value: number) {
    let val: number = 0;
    if (typeof this.buttonValue === 'string') {
      val = parseInt(this.buttonValue)
    }
    if (value !== val) {
      this.errorMessage = 'You have selected wrong fixture ' ;
      this.showButton =  false;
    }
    if (value ===  val){
      this.showButton =  true;
      this.errorMessage = '';
    }

  }

  openStartCyclePopup() {
   this.dialog.open(StartCyclePopupComponent, {
      width: '500px',
      height: '300px',
      disableClose: true,
      data: { }
    }).afterClosed()
      .subscribe((result: boolean) => {
      if(result) {
        // this.showLoader = true;
        // setTimeout(() => {this.showLoader = false, this.showButton = true}, 900)
        const routerOneOdReading = [151.98,151.97,152,151.99,151.95,151.89,151.72,152.14,152.09,152.17];
        const routerOneIdReading = [127.5,127.49,127.5,127.51,127.51,127.58,127.40,127.41,127.58,127.55];
        const routerTwoOdReading = [151.98, 151.97,152.00,151.99,151.88,151.90,151.79,151.91];
        const routerTwoIdReading = [127.53,127.50,127.49,127.51,127.57,127.41,127.43,127.42,127.58];
        const routerThreeOdReading = [151.95,151.98,151.99,151.92,151.91,151.88,151.75,151.62];
        const routerThreeIdReading = [127.51,127.53,127.50,127.42,127.55,127.40, 127.56];
        const routerFourOdReading = [151.98,152.00,151.99,151.95,151.88,151.85,151.82,152.12,152.20];
        const routerFourIdReading = [127.51,127.53,127.50,127.50,127.51,127.59,127.44,127.40,127.42];
        const routerFiveOdReading = [151.97,152.00,151.99,151.95,151.98,151.79,151.91,151.92,151.91];
        const routerFiveIdReading  = [127.51,127.53,127.50,127.42,127.55,127.40,127.56]
        const random = Math.floor(Math.random() * routerOneOdReading.length);
        console.log(this.buttonValue, 'button value')
        if(Number(this.buttonValue) === 1) {
          this.IdReading = routerOneIdReading[random];
          this.odReading = routerOneOdReading[random];
        }
        if(Number(this.buttonValue) === 2) {
          this.IdReading = routerTwoIdReading[random];
          this.odReading = routerTwoOdReading[random];
        }
        if(Number(this.buttonValue) === 3) {
          this.IdReading = routerThreeIdReading[random];
          this.odReading = routerThreeOdReading[random];
        }
        if(Number(this.buttonValue) === 4) {
          this.IdReading = routerFourIdReading[random];
          this.odReading = routerFourOdReading[random];
        }
        if(Number(this.buttonValue) === 5) {
          this.IdReading = routerFiveIdReading[random];
          this.odReading = routerFiveOdReading[random];
        }
        const navigationExtras: NavigationExtras = {
          queryParams: {
            router:this.buttonValue,
            reading: this.IdReading,
            odReading: this.odReading,
          }
        };
          this.router.navigate(['/air-cleaning'],navigationExtras);
      }
    });
  }


}
