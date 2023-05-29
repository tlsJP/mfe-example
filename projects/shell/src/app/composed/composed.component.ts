import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-composed',
  templateUrl: './composed.component.html',
  styleUrls: ['./composed.component.css'],
})
export class ComposedComponent implements OnInit {
  breakpoint!: number;

  ngOnInit(): void {
    this.breakpoint = window.innerWidth < 800 ? 5 : 10;
  }

  onResize(event: any) {
    this.breakpoint = event!.target.innerWidth <= 800 ? 5 : 10;
  }
}
