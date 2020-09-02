import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AccessGuard } from './guards/access.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'favourites',
    loadChildren: () => import('./pages/fav-list/fav-list.module').then((m) => m.FavListPageModule),
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then((m) => m.SearchPageModule),
  },
  {
    path: 'offer-details',
    loadChildren: () =>
      import('./pages/offer-details/offer-details.module').then((m) => m.OfferDetailsPageModule),
  },
  {
    path: 'new-offer',
    canActivate: [AccessGuard],
    loadChildren: () =>
      import('./pages/new-offer/new-offer.module').then((m) => m.NewOfferPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
