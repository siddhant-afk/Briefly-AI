import Navbar from "./components/Navbar";
import Header from "./components/Header";
import MainFeature from "./components/MainFeature";
import NewsCard from "./components/NewsCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <MainFeature />

      <section className="news-section flex flex-col items-center">
        <h1 className="self-start text-3xl font-bold news-section-heading">
          Latest News
        </h1>
        <div className="news-container mt-8">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
