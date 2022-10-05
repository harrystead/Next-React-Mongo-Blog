import classes from "./title.module.css";

export default function Title(props) {
  return (
      <>
        <div className={classes.header}>
            <h1>{props.title}
                <span>{props.tagLine}</span>
            </h1>
        </div>
      </>
  )
}
