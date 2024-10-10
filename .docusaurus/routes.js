import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '3c7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '366'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '4c2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'e4a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '80c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'd2c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'd28'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'ab7'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '1b5'),
    exact: true
  },
  {
    path: '/blog/docs-info-update',
    component: ComponentCreator('/blog/docs-info-update', '8ac'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'b15'),
    exact: true
  },
  {
    path: '/blog/tags/website',
    component: ComponentCreator('/blog/tags/website', 'f72'),
    exact: true
  },
  {
    path: '/blog/website-announcement',
    component: ComponentCreator('/blog/website-announcement', '256'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'a76'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '687'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '279'),
            routes: [
              {
                path: '/docs/Admin Panel/admin_issue',
                component: ComponentCreator('/docs/Admin Panel/admin_issue', 'c4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Admin Panel/Server_Shutdown',
                component: ComponentCreator('/docs/Admin Panel/Server_Shutdown', '98b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Custom_Commands',
                component: ComponentCreator('/docs/Custom_Commands', '7df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Getting_Started',
                component: ComponentCreator('/docs/Getting_Started', '30e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '031'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
