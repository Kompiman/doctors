import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  p: number = 1;
  city = localStorage.getItem('kota')
  pageSize = 10

  doctors = [
    {name: 'Kevin Durant', mastery: 'Dentist', price: 100000, rec: 456, exp: 13},
    {name: 'Kawhi Leonard', mastery: 'Herbalism', price: 250000, rec: 434, exp: 10},
    {name: 'Kyrie Irving', mastery: 'Podiatrist', price: 140000, rec: 256, exp: 7},
    {name: 'LeBron James', mastery: 'Optometry', price: 230000, rec: 340, exp: 11},
    {name: 'James Harden', mastery: 'Audiologist', price: 190000, rec: 234, exp: 9},
    {name: 'Luka Doncic', mastery: 'Veterinarian', price: 300000, rec: 456, exp: 6},
    {name: 'Trae Young', mastery: 'Dentist', price: 100000, rec: 156, exp: 12},
    {name: 'Paul George', mastery: 'Herbalism', price: 250000, rec: 567, exp: 11},
    {name: 'Nikola Jokic', mastery: 'Podiatrist', price: 140000, rec: 235, exp: 23},
    {name: 'Anthony Davis', mastery: 'Optometry', price: 230000, rec: 543, exp: 8},
    {name: 'Carmelo Anthony', mastery: 'Audiologist', price: 190000, rec: 366, exp: 12},
    {name: 'Jimmy Butler', mastery: 'Veterinarian', price: 300000, rec: 322, exp: 10},
  ]

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  goDetail(d) {
    localStorage.setItem('detail',JSON.stringify(d))
    
    this.router.navigateByUrl('/detail')
    console.log(d);
  }

  private openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "bottom"
    });
  }

}
