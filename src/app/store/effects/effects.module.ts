import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { CommonEffects } from './common.effects';

@NgModule({
  declarations: [],
  imports: [CommonModule, EffectsModule.forRoot([CommonEffects])]
})
export class AppEffectsModule {}
