import { useState } from "react";
import { useDispatch } from "react-redux";
import { Added } from "../../actions";
function AddItem() {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();


  const taskAdded = () => {
    if (item.length > 1) {
      dispatch(
       Added(item)
      )
      setItem("")
    }
    else {
      alert("Must Enter Something"      )
    }
    }

    return (
            <>
  <div>
  <h2 style={{margin:"5px"}} >My To Do List</h2>
  <input type="text" id="myInput" placeholder="Title..." value={item} onChange = {(e) => setItem(e.target.value)}  />
  <span  className="addBtn" onClick = {taskAdded}>Add</span>
</div>

            </>
    )
}

export default AddItem;