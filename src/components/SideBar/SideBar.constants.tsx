import {
  ServerIcon,
  DashboardIcon,
  EcosystemIcon,
  AnalyticsIcon,
  DiscoverBoxIcon,
  TeamsIcon
} from "../../icons";
import React from "react";

export const menuList = [
  {
    icon: <ServerIcon />,
    text: 'Nodes',
    id: 'nodes',
  },
  {
    icon: <DashboardIcon />,
    text: 'Dashboard',
    id: 'dashboard',
  },
  {
    icon: <EcosystemIcon />,
    text: 'Ecosystem',
    id: 'ecosystem'
  },
  {
    icon: <AnalyticsIcon />,
    text: 'Analytics',
    id: 'analytics'
  },
  {
    icon: <TeamsIcon />,
    text: 'Teams',
    id: 'teams'
  },
  {
    icon: <DiscoverBoxIcon fill={'#AFB2C0'}/>,
    text: 'Discover Web3',
    id: 'web3'
  }
]