import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { CartComponent } from '../cart/cart.component';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }
  openDialog1() {
    this.dialog.open(LoginComponent, {width: 'auto', height: 'auto'});
  }
  openDialog2() {
    this.dialog.open(CartComponent, {width: '80%', height: 'auto'});
  }
  ngOnInit(): void {
  }

}
