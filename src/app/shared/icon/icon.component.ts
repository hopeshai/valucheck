import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'nv-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() name: string;
  @Input() backgroundColor: string;
  @Output() click = new EventEmitter<MouseEvent>();

  iconUrl: string;

  constructor() { }

  ngOnInit() {
    this.iconUrl = `url("../../../assets/icons/${this.name}")`;
  }

  handleClick(event: MouseEvent) {
    this.click.emit(event);
  }

}
