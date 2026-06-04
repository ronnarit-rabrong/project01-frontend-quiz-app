import "./style.scss";
import type { ErrorProps } from "./type";

export default function Error(props: ErrorProps): React.ReactElement{
  const { message } = props.errorData;
  return (<>
    <section className="error">
      <div className="wrapper">
        <h1 className="title">.Error.</h1>
        <h2 className="message">{message}</h2>
      </div>
    </section>
  </>)
}
