import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BookComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
