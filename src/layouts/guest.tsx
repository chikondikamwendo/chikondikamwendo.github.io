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
        <>
            <header className="fixed top-0 left-0 z-50 w-full py-5">
                <nav className="mx-auto max-w-7xl">
                    <ul className="flex items-center justify-start gap-8">
                        <li>
                            <Link to="/">
                                <Code />
                            </Link>
                        </li>

                        {navLinks.map(({ name, path }) => (
                            <li key={name} className="*:hover:text-secondary-foreground *:transition-all">
                                <NavLink className={({ isActive }) => (isActive ? 'font-semibold' : 'text-secondary-foreground/80')} to={path}>
                                    {name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            <section className="relative mx-auto h-screen max-w-7xl">
                <Outlet />
            </section>

            <footer className="fixed bottom-0 left-0 z-50 w-full py-5">
                <section className="mx-auto max-w-7xl">
                    <ul className="flex items-center gap-4">
                        {socialLinks.map(({ icon: Icon, path }) => (
                            <li key={path}>
                                <a href={path} target="_blank" rel="noreferrer">
                                    <Icon className="text-secondary-foreground/80 hover:text-secondary-foreground text-2xl transition-colors" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            </footer>

            <section className="absolute top-0 left-0 -z-10 h-screen w-full">
                <div className="relative mx-auto h-full max-w-7xl overflow-clip">
                    <div className="absolute -right-[32%] bottom-1/2 -translate-x-[1%] translate-y-1/2 -rotate-90">
                        <p className="text-stroke text-[10rem] opacity-15">Hello World</p>
                    </div>
                </div>
            </section>
        </>
    );
}
