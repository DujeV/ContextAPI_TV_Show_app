import { useEffect, useContext } from "react";
import "./index.css";

//context
import ShowsContext from "../../context/shows/ShowsContext";

//components
import Loader from "../../components/Loader";

const Detailspage = ({ match }) => {
  const showsContext = useContext(ShowsContext);
  const { singleShow, loading, getSingleShow, clearSingleShow } = showsContext;

  useEffect(() => {
    getSingleShow(match.params.id);

    //eslint-disable-next-line
  }, []);

  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="singleshow">
          <img
            src={
              singleShow.image
                ? singleShow.image.medium
                : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
            }
            alt={singleShow.name}
          />
          <div className="singleshow__info">
            <h1>{singleShow.name}</h1>
            {singleShow.genres &&
              singleShow.genres.map((genre) => (
                <span key={genre} className="info__genre">
                  {genre}
                </span>
              ))}
            <p>
              <strong>Status:</strong>{" "}
              {singleShow.status ? singleShow.status : "No status"}
            </p>
            <p>
              <strong>Rating:</strong>{" "}
              {singleShow.rating
                ? `${singleShow.rating.average} / 10 `
                : "No rating"}
            </p>
            <p>
              <strong>Official site:</strong>{" "}
              {singleShow.officialSite ? (
                <a
                  href={singleShow.officialSite}
                  target="blank"
                  rel="noreferrer"
                >
                  {singleShow.officialSite}
                </a>
              ) : (
                "/"
              )}
            </p>
            <p>
              {singleShow.summary
                ? removeTags(singleShow.summary)
                : "No description"}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Detailspage;
