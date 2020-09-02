import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { OfferItem } from '../models/offer-item.model';
import { ImmoStorage } from './immo-store.interface';

@Injectable()
export class ItemOfferDexieStore extends Dexie implements ImmoStorage {
  offers: Dexie.Table<OfferItem, number>;

  constructor() {
    super('ImmoDatabaseDexie', { autoOpen: true });
    this.version(1).stores({
      offers: 'offerId',
    });
    this.offers = this.table('offers');
  }

  async getOffers(): Promise<OfferItem[]> {
    return this.offers.toArray();
  }

  async getOffer(id: number): Promise<OfferItem> {
    return this.offers.get({ offerId: id });
  }

  async addOffer(offer: OfferItem): Promise<number> {
    console.log('offer update dexie', offer);
    const id = await this.offers.add(offer);
    return id;
  }

  async updateOffer(offer: OfferItem): Promise<number> {
    const id = await this.offers.update(offer.offerId, { images: offer.image });
    return id;
  }

  async deleteOffer(offer: OfferItem): Promise<boolean> {
    if (offer.offerId) {
      this.offers.delete(offer.offerId);
    }
    return true;
  }
}
