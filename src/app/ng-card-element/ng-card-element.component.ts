import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from "@angular/core";

@Component({
  selector: "app-ng-card-element",
  templateUrl: "./ng-card-element.component.html",
  styleUrls: ["./ng-card-element.component.css"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NgCardElementComponent implements OnInit {
  @Input()
  public title: string;
  @Input()
  public name: string;
  @Input()
  public time = new Date();
  @Input()
  public caption: string;
  @Input()
  public avtar: string;
  @Input()
  public image: string;

  @Output()
  public likeNotify = new EventEmitter<boolean>();
  @Output()
  public shareNotify = new EventEmitter<boolean>();
  @Output()
  public commentNotify = new EventEmitter<boolean>();

  constructor() {}

public ngOnInit() {}

  likeEvent() {
    this.likeNotify.emit(true);
  }
  shareEvent() {
    this.shareNotify.emit(true);
  }
  commentEvent() {
    this.commentNotify.emit(true);
  }
}
