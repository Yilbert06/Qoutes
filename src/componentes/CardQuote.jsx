import Button from "./Button";
import "./CardQuote.css";


const CardQuote = ({data, changeCards}) => {
  return (
    <section className="card">
      <div className="content">
        <h2>FAMOUS QUOTES</h2>
        <p className="quotePharse">{data.quote}</p>
        <h3 className="autorName">
          <strong className="autorName__str"><strong>Author:</strong></strong> {data.author}
        </h3>
      </div>
      <Button changeCards={changeCards} />
    </section>
  );
};
export default CardQuote;
