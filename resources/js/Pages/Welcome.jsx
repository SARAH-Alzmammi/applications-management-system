import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    // Function to generate a greeting based on the time of day
    const getTimeBasedGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good morning";
        if (hour < 18) return "Good afternoon";
        return "Good evening";
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 ">
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="col-span-2 flex justify-start items-center">
                                <h1 className="text-3xl font-bold text-black">
                                    {getTimeBasedGreeting()}, {auth.user ? auth.user.name : "Guest"}!
                                    <p className="text-lg  text-black ">Welcome to HR applications management system</p>

                                </h1>
                            </div>
                            <nav className="-mx-3 flex justify-end">
                            {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] d"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] "
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] "
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                    </div>
                </div>
            </div>
        </>
    );
}
