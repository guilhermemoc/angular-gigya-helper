import { InjectionToken } from '@angular/core';
import { Gigya } from '../models';
import { Global } from './global';

const global: Global = window;

export const GIGYA = new InjectionToken<Gigya>('gigya', {
  providedIn: 'any',
  factory: () => global.gigya as Gigya
});
