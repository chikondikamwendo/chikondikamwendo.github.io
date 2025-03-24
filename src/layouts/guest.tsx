import { Github } from '@/components/icons/github';
import { Linkedin } from '@/components/icons/linkedin';
import { Mailbox } from '@/components/icons/mailbox';
import { Code } from 'lucide-react';
import { Link, NavLink, Outlet } from 'react-router';

const navLinks = [
    {
        name: 'About',
        path: '/about',
    },
    {
        name: 'Projects',
        path: '/projects',
    },
    {
        name: 'Contacts',
        path: '/contacts',
    },
];

const socialLinks = [
    {
        icon: Github,
        path: 'https://github.com/chikondikamwendo',
    },
    {
        icon: Linkedin,
        path: 'https://www.linkedin.com/in/chikondikamwendo',
    },
    {
        icon: Mailbox,
        path: 'mailto:chikondikamwendo@yahoo.com',
    },
];

export default function Guest() {
    return (
        <main className="max-w-7xl mx-auto h-screen flex flex-col relative overflow-hidden">
            <header className="py-5">
                <nav className="w-full">
                    <ul className="flex justify-start items-center gap-8">
                        <li>
                            <Link to="/">
                                <Code />
                            </Link>
                        </li>

                        {navLinks.map(({ name, path }) => (
                            <li
                                key={name}
                                className="*:hover:text-secondary-foreground *:transition-all"
                            >
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'font-semibold'
                                            : 'text-secondary-foreground/80'
                                    }
                                    to={path}
                                >
                                    {name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            <section className="w-full flex-1">
                <Outlet />
            </section>

            <footer className="py-5 w-full">
                <ul className="flex items-center gap-4">
                    {socialLinks.map(({ icon: Icon, path }) => (
                        <li key={path}>
                            <a href={path} target="_blank" rel="noreferrer">
                                <Icon className="text-2xl text-secondary-foreground/80 hover:text-secondary-foreground transition-colors" />
                            </a>
                        </li>
                    ))}
                </ul>
            </footer>

            <div className="absolute -right-[32%] -translate-x-[1%] bottom-1/2 translate-y-1/2 -z-10  -rotate-90">
                <p className="text-[10rem] text-stroke opacity-15">
                    Hello World
                </p>
            </div>
        </main>
    );
}
