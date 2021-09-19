import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Removed , Completed  } from "../../actions";

function List() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  return (
    <>
      {state.map((value, indexx) => {
        return (
            <li
              onClick={() => dispatch(
              Removed(indexx)
              )
              }
              className={value.isDone ? "checked" : ""}
              key={indexx}
            >
              {value.msg}
              <span
                className="close"
                onClick={(ev) => {
                  ev.stopPropagation();
                  dispatch(
                   Completed(indexx)
                  )
                }}
              >
                X
              </span>
            </li>
        );
      })}
      {/* 
      <li key={idx} onClick={() => done(idx) }  className={todo.isDone ? "checked" : ""}>
        {todo.msg}
      <span className="close" onClick={()=>{wantDelete(idx)}} >
        x
      </span >
      </li> */}
    </>
  );
}

export default List;
