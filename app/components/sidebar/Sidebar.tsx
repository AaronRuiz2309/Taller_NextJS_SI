
import React from 'react';

interface SidebarProps {
    title: string;
    links: { name: string; href: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ title, links }) => {
    return (
        <aside className="w-64 bg-gray-200 p-4">
            <h2 className="text-lg font-bold mb-4">{title}</h2>
            <ul className="space-y-2">
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.href} className="text-primary hover:underline">
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
