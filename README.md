# Web-Annotator
A web app for manuscripts annotation

# Intsallations:
  1. Download the project
  2. Install NodeJS (last version - v7.3.0)
  3. Install NodeMon:  $nmp install -g nodemon
  4. Open terminal at the main folder: $npm install
  5. Open terminal at the client folder: $npm install
  
# Working on the project:
  1. Open terminal at the main folder: $nodemon
  2. Open terminal at the client folder: $npm start (development)
  
# Adding a component:
  1. Open new page: .client/app/components/pages/NAME
  2. Edit the new page: 
                          import { Component } from '@angular/core';

                        @Component({
                          moduleId: module.id,
                          selector: 'NAME3',
                          templateUrl: '../../../../templates/NAME2.component.html'
                        })

                        export class NAME1 {
                        }
  3. Open new tamplate: .client/app/components/tamplates/NAME                     

  4. In app.module.ts add: 1. import { NAME1 } from './components/pages/NAME2.component.html'; 
                           2. @NgModule - declarations: [...., NAME1]
  
  
