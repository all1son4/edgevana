import {AnalyticsIcon, DashboardIcon, DiscoverBoxIcon, EcosystemIcon, ServerIcon, TeamsIcon} from "../../icons";
import React from "react";

export const navigationTabs = [
  {
    text: 'Overview',
    id: 'overview',
  },
  {
    text: 'Projects',
    id: 'projects',
  },
  {
    text: 'Events',
    id: 'events',
  },
  {
    text: 'News',
    id: 'news',
  },
  {
    text: 'Developer Toolkit',
    id: 'developerToolkit',
  },
  {
    text: 'Entrepreneur Toolkit',
    id: 'entrepreneurToolkit',
  },
]

export const mainTabs = [
  {
    icon: <ServerIcon />,
    text: 'Nodes',
    shortText: 'Nodes',
    id: 'nodes',
  },
  {
    icon: <DashboardIcon />,
    shortText: 'Dashboard',
    text: 'Dashboard',
    id: 'dashboard',
  },
  {
    icon: <EcosystemIcon />,
    shortText: 'Ecosystem',
    text: 'Ecosystem',
    id: 'ecosystem'
  },
  {
    icon: <AnalyticsIcon />,
    shortText: 'Analytics',
    text: 'Analytics',
    id: 'analytics'
  },
  {
    icon: <TeamsIcon />,
    shortText: 'Teams',
    text: 'Teams',
    id: 'teams'
  },
  {
    icon: <DiscoverBoxIcon />,
    shortText: 'Web3',
    text: 'Discover Web3',
    id: 'web3'
  }
]