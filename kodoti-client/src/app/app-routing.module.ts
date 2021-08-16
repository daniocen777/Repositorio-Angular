import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './components/default/default.component';
import { OutcomeListComponent } from './components/outcome/outcome-list/outcome-list.component';
import { OutcomeCreateComponent } from './components/outcome/outcome-create/outcome-create.component';
import { OutcomeUpdateComponent } from './components/outcome/outcome-update/outcome-update.component';

const routes: Routes = [
  { path: '', component: DefaultComponent },
  {
    path: 'outcomes',
    children: [
      { path: '', component: OutcomeListComponent },
      { path: 'create', component: OutcomeCreateComponent },
      { path: ':id/update', component: OutcomeUpdateComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
