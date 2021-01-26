import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { StudentComponent } from "./student/student.component";
import { BookComponent } from "./book/book.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, StudentComponent, BookComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
