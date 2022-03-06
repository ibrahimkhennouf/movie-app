import { Link } from "react-router-dom";

export let Card = (props) => {
  let { name, poster, id } = props;

  return (
    <div>
      <div className="card">
        <Link to={"/movie/" + id}>
          <img src={poster} alt="" />
          <h4>{name}</h4>
        </Link>
      </div>
    </div>
  );
};
