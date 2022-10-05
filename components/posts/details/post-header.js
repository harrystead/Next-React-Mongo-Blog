import classes from "./post-header.module.css";

export default function PostHeader(props) {
  return (
    <header className={classes.header}>
      <div>
        <img src={props.image} alt={props.title} />
      </div>
      <h1>{props.title}</h1>
    </header>
  )
}