import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'nv-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  host: {
    '[class.round]': 'type === "round"',
    '[class.small]': 'size === "small"',
    '[class.large]': 'size === "large"',
    '[class.error]': 'type === "error"'
  }
})
export class IconComponent implements OnInit {

  @Input() name: string;
  @Input() fill: string;
  @Input() size: string;
  @Input() type: string;
  @Output() click = new EventEmitter<MouseEvent>();

  sizeOptions = {
    s: 1.6,
    m: 2.4,
    l: 3.6,
    xl: 8,
  };

  constructor() { }

  ngOnInit() { }

  handleClick(event: MouseEvent) {
    this.click.emit(event);
  }

}
