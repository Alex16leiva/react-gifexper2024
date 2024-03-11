import { useFetchGif } from "../hooks/useFetchGif";
import { GitItem } from "./GitItem";

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGif(category);

  return (
    <>
      <h3>{category}</h3>
      { 
        isLoading && (<h1>Is  Loading...</h1>) 
      }

      <div className="card-grid">
        {
          images.map((img) => (
            <GitItem key={img.id} image={img} />
          ))
        }
      </div>
    </>
  );
};
