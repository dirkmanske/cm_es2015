import angular from 'angular';
import { NavComponent } from './app-nav.component';
import './app-nav.scss';

export const appNav = angular
    .module('common.app.nav', [

    ])
    .component('appNav', NavComponent)
    .name;