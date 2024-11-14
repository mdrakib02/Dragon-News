import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import NavBar from "../Components/NavBar";

export default function MainLayout() {
  return (
    <>
    <header>
        <Header/>
        <section className="w-10/12 mx-auto pt-4">
            <LatestNews/>
        </section>
    </header>
    <nav className="w-10/12 mx-auto">
        <NavBar></NavBar>
    </nav>
    <main></main>
    </>
  )
}
