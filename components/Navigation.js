import Link from 'next/link';

export default function Navigation() {
    const linkClass = 'md:p-1 hover:bg-gray-200 hover:text-gray-700 text-2xl md:text-base'; // Define your styles here

    return (
        <nav className="font-mono">
            <ul className="flex md:space-x-4 flex-col md:flex-row">
             
                <li>
                    <Link href="/about" className={linkClass}>
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/about/projects" className={linkClass}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link href="/photos" className={linkClass}>
                        Photos
                    </Link>
                </li>
                <li>
                    <Link href="/blog" className={linkClass}>
                        Blog
                    </Link>
                </li>
            </ul>
        </nav>
    );
}