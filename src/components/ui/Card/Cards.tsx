import { Link } from "react-router-dom";

interface CardProps {
  index: number;
  name: string;
  id: string;
  description: string;
}

const Card = ({ index, name, id, description }: CardProps) => {
  return (
    <Link to={`/exercises/${id}`}>
      <div className="container border px-6 py-6 rounded border-solid border-[#e8eaee] bg-slate-50 ">
        <h4 className="text-black font-semibold">{`${index}. ${name}`}</h4>
        <p className="mt-2">{description}</p>
      </div>
    </Link>
  );
};

export default Card;
