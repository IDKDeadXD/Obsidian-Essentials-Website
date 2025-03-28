import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'a43'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'e73'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '464'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '583'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '802'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '981'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '9c9'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b83'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'cfc'),
    exact: true
  },
  {
    path: '/blog/docs-info-update',
    component: ComponentCreator('/blog/docs-info-update', '467'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '37a'),
    exact: true
  },
  {
    path: '/blog/tags/website',
    component: ComponentCreator('/blog/tags/website', '4f5'),
    exact: true
  },
  {
    path: '/blog/website-announcement',
    component: ComponentCreator('/blog/website-announcement', '976'),
    exact: true
  },
  {
    path: '/changelogs',
    component: ComponentCreator('/changelogs', '959'),
    exact: true
  },
  {
    path: '/download',
    component: ComponentCreator('/download', '7ff'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '397'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '211'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'a7e'),
            routes: [
              {
                path: '/docs/@Updates/1-8-25',
                component: ComponentCreator('/docs/@Updates/1-8-25', 'cfb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
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
                path: '/docs/Admin Panel/custom-commands',
                component: ComponentCreator('/docs/Admin Panel/custom-commands', '8d9'),
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
                path: '/docs/Admin Panel/lag-zapper',
                component: ComponentCreator('/docs/Admin Panel/lag-zapper', 'e57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Admin Panel/mob-banning',
                component: ComponentCreator('/docs/Admin Panel/mob-banning', '807'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Admin Panel/player-options',
                component: ComponentCreator('/docs/Admin Panel/player-options', '311'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Admin Panel/polls',
                component: ComponentCreator('/docs/Admin Panel/polls', '577'),
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
                path: '/docs/Admin Panel/rules-menu',
                component: ComponentCreator('/docs/Admin Panel/rules-menu', '317'),
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
                path: '/docs/Commands/codes',
                component: ComponentCreator('/docs/Commands/codes', '976'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Commands/help-command',
                component: ComponentCreator('/docs/Commands/help-command', 'b7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Commands/item-blacklist',
                component: ComponentCreator('/docs/Commands/item-blacklist', '655'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Community Panel/player-shops',
                component: ComponentCreator('/docs/Community Panel/player-shops', '3a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Community Panel/report-system',
                component: ComponentCreator('/docs/Community Panel/report-system', '966'),
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
    component: ComponentCreator('/', '25e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
