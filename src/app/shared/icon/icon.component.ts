import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'nv-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() name: string;
  @Input() fill: string;
  @Input() size: string;
  @Output() click = new EventEmitter<MouseEvent>();

  sizeOptions = {
    small: 1.6,
    medium: 2.4,
    large: 3.6
  };

  constructor() { }

  ngOnInit() { }

  handleClick(event: MouseEvent) {
    this.click.emit(event);
  }

}
