
export const Starting = () => {
    return (
        <div className="bg-gray-100">
            {/* Header */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
                    <h1 className="text-4xl font-extrabold">MyMedium 🖤</h1>
                    <nav className="mt-4 flex justify-center flex-col">
                        <ul className="flex space-x-4 pr-4 font-semibold">
                            <li><a href="/signup" className="text-blue-500">Login</a></li>
                            <li><a href="/home" className="text-blue-500">Home</a></li>
                            <li><a href="/contact" className="text-blue-500">Contact</a></li>
                            <li><a href="/about" className="text-blue-500">About</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            {/* Hero Section */}
            <section className="bg-blue-500 text-white text-center py-20">
                <h2 className="text-4xl font-bold">Hii there ! Welcome to Our Blogging Community</h2>
                <p className="mt-4">Share your thoughts, ideas, and stories with the world.</p>
                <a href="/signup" className="mt-6 inline-block bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold">Explore Blogs</a>
            </section>

            {/* Features Section */}
            <section className="max-w-7xl mx-auto px-4 py-5">
                <h3 className="text-2xl font-bold text-center">Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h4 className="font-semibold text-lg">Easy to Use</h4>
                        <p className="mt-2">Our platform is user-friendly and easy to navigate.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h4 className="font-semibold text-lg">Community Driven</h4>
                        <p className="mt-2">Join a vibrant community of bloggers and readers.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h4 className="font-semibold text-lg">Responsive Design</h4>
                        <p className="mt-2">Access your blog from any device, anywhere.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center py-6">
                <p>&copy; 2024 My Blogging Website. All rights reserved.</p>
            </footer>
        </div>
    );
};