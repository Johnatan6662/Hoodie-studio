import Button from "./ui/button";

export default function Navbar() {
    return (
        <nav className="fixed left-0 right-0 top-0 z-50 backdrop-blur-lg">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                <h1 className="text-2xl font-bold">
                    Hoodie.
                </h1>

                <div className="hiddengap-8 md:flex">
                    <a href="#">Home</a>
                    <a href="#">Customize</a>
                    <a href="#">Products</a>
                    <a href="#">Contact</a>
                </div>

                <Button>Shop now</Button>
            </div>
        </nav>
    );
}