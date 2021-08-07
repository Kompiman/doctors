import { Component, OnInit, ViewChild } from '@angular/core';
import { } from 'googlemaps';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  detail
  city = localStorage.getItem('kota')

  zoom: number = 8;
  
  // initial center position for the map
  lat: number = -6.192793835439082;
  lng: number = 106.76874531864013;

  constructor() { }

  ngOnInit(): void {
    this.detail = JSON.parse(localStorage.getItem('detail'))
    console.log(this.detail)
  }

}
