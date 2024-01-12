
import { lazy } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import {TodoView} from "Frontend/views/TodoView";



export const routes = [
  {

    handle: { title: 'Main' },
    children: [
      { path: '/', element: <TodoView/>, handle: { title: 'Hello World' } },
     ,
    ],
  },
] as RouteObject[];

export default createBrowserRouter(routes);
