import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nv-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() size: string;
  @Input() textOnly: boolean;
  @Input() type: string;
  @Input() iconUrl: string;
  @Input() variant: string;
  @Input() width: string;
  @Output() click = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit() { }

  handleClick(event: MouseEvent) {
    this.click.emit(event);
  }
}
