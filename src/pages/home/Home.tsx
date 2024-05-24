import { useState } from "react";
import Card from "../../components/ui/card/Cards";
import "./Home.scss";

interface Challenge {
  id: string;
  name: string;
  description: string;
  component?: string;
}

interface HomeProps {
  exercisesPages: Challenge[];
}

const Home = ({ exercisesPages }: HomeProps) => {
  return (
    <>
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
        <div className="grid md:grid-cols-3 gap-4 mt-5">
          {exercisesPages.map((Exr, index) => (
            <Card
              name={Exr.name}
              id={Exr.id}
              description={Exr.description}
              index={index + 1}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
