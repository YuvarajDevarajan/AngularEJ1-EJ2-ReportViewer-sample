import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';

import { DropDownListAllModule } from '@syncfusion/ej2-ng-dropdowns';
import { EJ_GRID_COMPONENTS } from 'ej-angular2/src/ej/grid.component';
import { ReportViewerComponent } from 'ej-angular2/src/ej/reportviewer.component';

// export function translateLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, './i18n/', '.json');
// }

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    EJ_GRID_COMPONENTS,
	ReportViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    DropDownListAllModule    
  ]
})
export class AppModule { }
