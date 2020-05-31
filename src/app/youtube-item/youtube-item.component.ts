import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-youtube-item',
  templateUrl: './youtube-item.component.html',
  styleUrls: ['./youtube-item.component.css']
})
export class YoutubeItemComponent implements OnInit {
  @Input() public image: string;
  @Input() public nomVideo: string;
  @Input() public desc: string;

  constructor() { }

  ngOnInit(): void {
  }

}
