import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-label-atom',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  @Input() text!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
