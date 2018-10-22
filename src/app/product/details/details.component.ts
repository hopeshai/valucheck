import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'nv-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  code$: Observable<string>;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.code$ = route.queryParams.pipe(
      map(queryParam => queryParam.code)
    );
  }

  ngOnInit() {
  }

  goToScanPage() {
    this.router.navigateByUrl('scan');
  }

}
