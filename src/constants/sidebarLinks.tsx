import { MdContactSupport, MdDashboard } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';
import { LuLogOut } from 'react-icons/lu';
import { GiProgression } from 'react-icons/gi';
import { RiCommunityFill } from 'react-icons/ri';
import { SiTask } from 'react-icons/si';

type SubLink = {
    name: string
    route: string
    icon?: React.ReactNode
};

type Link = {
    title: string
    links: SubLink[]
}

export const SidebarLinks: Link[] = [
    {
        title: 'Dashboard',
        links: [
            {
                name: 'overview',
                route: '/overview',
                icon: <MdDashboard />
            }
        ]
    },
    {
        title: 'Pages',
        links: [
            {
                name: 'recommendations',
                route: '/recommendations',
                icon: <SiTask />,
            },
            {
                name: 'progress',
                route: '/progress',
                icon: <GiProgression />,
            },
            {
                name: 'community',
                route: '/community',
                icon: <RiCommunityFill />,
            },
        ]
    },
    {
        title: 'Settings',
        links: [
            {
                name: 'settings',
                route: '/settings',
                icon: <IoMdSettings />,
            },
            {
                name: 'support',
                route: '/support',
                icon: <MdContactSupport />,
            },
            {
                name: 'logout',
                route: '/logout',
                icon: <LuLogOut />,
            },
        ]
    },
]