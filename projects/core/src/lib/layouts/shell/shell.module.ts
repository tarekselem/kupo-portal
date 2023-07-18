import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { ShellComponent } from './shell.component';

@NgModule({
  imports: [
    FlexLayoutModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
  ],
  providers: [],
  declarations: [ShellComponent],
  exports: [ShellComponent],
})
export class ShellModule {}
