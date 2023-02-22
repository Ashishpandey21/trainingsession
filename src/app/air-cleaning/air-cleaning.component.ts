import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-air-cleaning',
  templateUrl: './air-cleaning.component.html',
  styleUrls: ['./air-cleaning.component.css']
})
export class AirCleaningComponent {

  IdReading: string | null;

  OdReading: string | null;

  routerd: string | null;

  status: boolean | null;

  result: boolean;


  routeOneOkData = [{odSize:151.98, idSize: 127.5 },{odSize:151.97, idSize: 127.49}, {odSize: 152, idSize: 127.5}, {odSize: 151.99, idSize: 127.51}, {odSize: 151.95, idSize: 127.51}];

  routeTwoOkData = [{odSize:151.98, idSize: 127.53 },{odSize:151.98, idSize:127.50}, {odSize: 151.97, idSize: 127.49}, {odSize: 152, idSize: 127.5}, {odSize: 151.99, idSize: 127.51}];

  routeThreeOkData = [{odSize:151.95, idSize: 127.51 },{odSize:151.98, idSize:127.53}, {odSize: 151.99, idSize: 127.5}, {odSize: 151.95, idSize: 127.51}, {odSize: 151.98, idSize: 127.51}];

  routeFourOkData = [{odSize:151.98 , idSize: 127.51}, {odSize: 152, idSize:127.5 }, {odSize:151.99, idSize: 127.5}, {odSize: 151.95, idSize: 127.5}, {odSize: 151.98, idSize: 127.51}];

  routeFiveOkData = [{odSize:151.97, idSize:127.51}, {odSize: 152, idSize: 127.53}, {odSize: 151.99, idSize: 127.5}, {odSize: 151.95, idSize: 127.51}, {odSize: 151.98, idSize: 127.53}];

  constructor(private navigationRoute: Router, public route: ActivatedRoute) {
  }



  ngOnInit(): void {
    this.IdReading = this.route.snapshot.queryParamMap.get('reading');
    this.OdReading = this.route.snapshot.queryParamMap.get('odReading');
    this.routerd = this.route.snapshot.queryParamMap.get('router');
  }
  airCleanShow: boolean = true;
  isChecked = false;
  err = "";


  airCleanStart() {

    this.airCleanShow = false;
    this.err = "";
    console.log(this.status, 'statius')
  }

  okUrl() {
   this.result = this.decision();
    if(this.result) {
      const navigationExtras: NavigationExtras = {
        queryParams: {
          router:this.routerd,
        }
      };
      this.navigationRoute.navigate(['/lacquering'], navigationExtras)
    }
    this.err = 'Opps You failed';

  }

  notOkUrl() {
    this.result = this.decision();
    if(!this.result) {
      const navigationExtras: NavigationExtras = {
        queryParams: {
          status:this.result,
        }
      };
      this.navigationRoute.navigate(['/sfg-binning'],navigationExtras)
    }
    this.err = 'Opps You failed';

  }

  error() {
    this.err = "You have selected wrong action";
  }

  decision(): boolean  {
    if(Number(this.routerd) === 1 ) {
      return !!this.routeOneOkData.find((data) => data.idSize === Number(this.IdReading) && data.odSize === Number(this.OdReading));
    }
    if(Number(this.routerd) === 2 ) {
      return !!  this.routeTwoOkData.find((data) => data.idSize === Number(this.IdReading) && data.odSize === Number(this.OdReading));
    }
    if(Number(this.routerd) === 3 ) {
      return!! this.routeThreeOkData.find((data) => data.idSize === Number(this.IdReading) && data.odSize === Number(this.OdReading));
    }
    if(Number(this.routerd) === 4 ) {
      return !! this.routeFourOkData.find((data) => data.idSize === Number(this.IdReading) && data.odSize === Number(this.OdReading));
    }
    if(Number(this.routerd) === 5 ) {
      return !! this.routeFourOkData.find((data) => data.idSize === Number(this.IdReading) && data.odSize === Number(this.OdReading));
    }
    return false;
  }

}
