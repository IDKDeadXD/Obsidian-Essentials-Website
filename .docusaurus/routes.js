import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '471'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/docs-info-update',
    component: ComponentCreator('/blog/docs-info-update', 'a45'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/website',
    component: ComponentCreator('/blog/tags/website', '12b'),
    exact: true
  },
  {
    path: '/blog/website-announcement',
    component: ComponentCreator('/blog/website-announcement', 'e2b'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'dfd'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '2c9'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '09e'),
            routes: [
              {
                path: '/docs/Admin Panel/announcements',
                component: ComponentCreator('/docs/Admin Panel/announcements', '451'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Admin Panel/ban-system',
                component: ComponentCreator('/docs/Admin Panel/ban-system', '006'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Admin Panel/floating-text',
                component: ComponentCreator('/docs/Admin Panel/floating-text', '680'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Admin Panel/ranks',
                component: ComponentCreator('/docs/Admin Panel/ranks', '44d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Admin Panel/Server-Shutdown',
                component: ComponentCreator('/docs/Admin Panel/Server-Shutdown', '0f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Admin Panel/sidebar-creator',
                component: ComponentCreator('/docs/Admin Panel/sidebar-creator', '2c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Admin Panel/spawn-protection',
                component: ComponentCreator('/docs/Admin Panel/spawn-protection', 'be6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/custom-commands',
                component: ComponentCreator('/docs/custom-commands', '8e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/report-system',
                component: ComponentCreator('/docs/report-system', '8f3'),
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
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
