import {Component, Input, OnInit} from '@angular/core';
import {DataBox} from '../../interfaces';

@Component({
  selector: 'app-data-box',
  templateUrl: './data-box.component.html',
  styleUrls: ['./data-box.component.css']
})
export class DataBoxComponent implements OnInit {
  @Input() dataBox: DataBox = {};
  constructor() { }

  ngOnInit(): void {
  }

}
