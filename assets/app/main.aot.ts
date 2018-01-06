import './polyfills';

import { platformBrowser } from '@angular/platform-browser';

import { AppModule } from './app.module';
import { enableProdMode } from '@angular/core/src/application_ref';

import { AppModuleNgFactory } from "./app.module.ngfactory";

enableProdMode();

platformBrowser().bootstrapModule(AppModuleNgFactory);