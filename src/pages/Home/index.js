import "./index.css";
import { useContext } from "react";
import "./index.css";

//context
import ShowsContext from "../../context/shows/ShowsContext";

//components
import SearchBar from "../../components/SearchBar/index";
import ListItem from "../../components/ListItem/index";
import Loader from "../../components/Loader/index";

const Homepage = () => {
  const showsContext = useContext(ShowsContext);
  const { shows, loading } = showsContext;

  return (
    <div className="homepage">
      <SearchBar />
      {loading ? (
        <Loader />
      ) : (
        <div className="homepage__list">
          {shows.map((item) => {
            return (
              <ListItem
                key={item.show.id}
                id={item.show.id}
                image={
                  item.show.image
                    ? item.show.image.medium
                    : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
                }
                name={item.show.name}
                rating={
                  item.show.rating.average
                    ? item.show.rating.average
                    : "No rating"
                }
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Homepage;
