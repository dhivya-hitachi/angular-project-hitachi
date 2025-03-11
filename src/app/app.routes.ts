import { Routes, RouterModule } from '@angular/router';
import { CommunicationComponent } from './components/communication/communication.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { DependencyInjectionComponent } from './components/dependency-injection/dependency-injection.component';
import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle-hooks.component';
import { AgGridComponent } from './components/ag-grid/ag-grid.component';

export const routes: Routes = [
    // { path: 'dashboard', component: DashboardComponent },
    {
      path: 'dashboard',
      loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    { path: 'communication', component: CommunicationComponent },
    { path: 'reactiveforms', component: ReactiveFormsComponent },
    {
      path: 'pipesanddirectives',
      loadChildren: () => import('./components/pipes-directives/pipes-directives.module').then(m => m.PipesDirectivesModule)
    },
    { path: 'dependencyinjection', component: DependencyInjectionComponent },
    { path: 'lifecyclehooks', component: LifecycleHooksComponent },
    { path: 'aggrid', component: AgGridComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
