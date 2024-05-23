import TopMenu from "../components/ui/Menu/Menus";
import Card from "../components/ui/Card/Cards";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <TopMenu />
      <div className="container mx-auto px-4 py-4 mb-8">
        <h1>
          Welcome to <span>React coding</span> challenges implementations!!
        </h1>
        <p>
          In this page you will find my implementations from
          <a href="https://blog.imocha.io/react-coding-challenges">
            Top 15 React Coding Challenges to Hire React Developers
          </a>
        </p>
      </div>
      <hr />
      <div className="container mx-auto px-4 mt-9">
        <h3>Challenges</h3>
        <div className="md:columns-3 mt-5">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Home;
