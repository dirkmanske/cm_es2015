import angular from 'angular';
import { SidebarComponent } from './app-sidebar.component';
import './app-sidebar.scss';

export const appSidebar = angular
    .module('common.app-sidebar', [])
    .component('appSidebar', SidebarComponent)
    .name;