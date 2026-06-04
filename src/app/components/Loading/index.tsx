import "./style.scss";

export default function Loading(): React.ReactElement{
  return (<>
    <section className="loading">
      <div className="wrapper">
        <h1 className="message">Loading...</h1>
      </div>
    </section>
  </>)
}
