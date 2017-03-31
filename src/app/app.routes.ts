import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './events/events.component';
import { SpeakersComponent } from './speakers/speakers.component';

const routes: Routes = [
  { path: 'events', component: EventsComponent },
  { path: 'speakers', component: SpeakersComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
