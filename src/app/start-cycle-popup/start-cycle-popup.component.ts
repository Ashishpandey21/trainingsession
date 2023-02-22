import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-start-cycle-popup',
  templateUrl: './start-cycle-popup.component.html',
  styleUrls: ['./start-cycle-popup.component.css']
})
export class StartCyclePopupComponent {

  constructor(
    public dialogRef: MatDialogRef<StartCyclePopupComponent>,
  )
  {}


}
