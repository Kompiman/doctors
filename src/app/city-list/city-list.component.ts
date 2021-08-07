import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  district

  cities = [
    { city: 'Kebon Jeruk, Jakarta' },
    { city: 'Puri, Jakarta' },
    { city: 'Grogol, Jakarta' },
    { city: 'Jatinegara, Jakarta' },
    { city: 'Mangga Dua, Jakarta' },
    { city: 'Slipi, Jakarta' },
  ]

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  goDoctor(d) {
    if (d) {
      this.router.navigateByUrl('/doctor-list')
      localStorage.setItem('kota', d)
    } else {
      this.openSnackBar('Your must choose a city', 'Dismiss')
    }
  }

  private openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "bottom"
    });
  }

}
