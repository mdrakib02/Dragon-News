import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftNavBar from "../Components/LayoutComponent/leftNavBar";
import NavBar from "../Components/NavBar";
import RightNavBar from "../Components/LayoutComponent/RightNavBar";

export default function MainLayout() {
  return (
    <>
      <div className="font-poppins">
        <header>
          <Header />
          <section className="w-10/12 mx-auto pt-4">
            <LatestNews />
          </section>
        </header>
        <nav className="w-10/12 mx-auto pt-12">
          <NavBar></NavBar>
        </nav>
        <main className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-12 pt-12">
          <aside className="col-span-3">
            <LeftNavBar></LeftNavBar>
          </aside>
          <section className="col-span-6">main content</section>
          <aside className="col-span-3">
            <RightNavBar></RightNavBar>
          </aside>
        </main>
      </div>
    </>
  );
}
