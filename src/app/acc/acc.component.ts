import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acc',
  templateUrl: './acc.component.html',
  styleUrls: ['./acc.component.css']
})
export class AccComponent implements OnInit {

  constructor() { }
  accountName = "Account";
  phoneNumber = "Number";
  ngOnInit(): void {
  }

}
