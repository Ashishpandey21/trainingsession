import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sfg-binning',
  templateUrl: './sfg-binning.component.html',
  styleUrls: ['./sfg-binning.component.css']
})
export class SfgBinningComponent  implements OnInit{
  status: string | null
  err: string = '';
  constructor(private router: ActivatedRoute, private route: Router) {
  }

  noOkButton () {
    console.log(this.status)
    if(this.status !== null) {
      this.route.navigate(['/'])
    }
    this.err = "Oops you have selected wrong action";
  }

  okButton () {
    console.log(this.status)
    if(this.status === null) {
      this.route.navigate(['/'])
    }
    this.err = "Oops you have selected wrong action";
  }

  ngOnInit(): void {
    this.status = this.router.snapshot.queryParamMap.get('status');
  }
}
