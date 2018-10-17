import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nv-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss']
})
export class RecentComponent implements OnInit {

  recentScans = [
    { icon: 'himalaya_skin_cream.png' },
    { icon: 'himalaya_facewash.png' },
    { icon: 'himalaya_drop.png' },
    { icon: 'himalaya_cream.png' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
