import Navbar from "../components/Navbar/Navbar"

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({ children }: Readonly<LayoutProps>) {
    return (
        <div>
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    )
}