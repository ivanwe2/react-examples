import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementMiltiplier,
  decrementMiltiplier,
} from "../../redux/slice/counterSlice";
import { useState } from "react";

function Counter() {
  const count = useSelector((state) => state.counterStore.count);
  const dispatch = useDispatch();
  const [multiplier, setMultiplier] = useState(10);

  return (
    <div
      className="text-white mt-2 pt-3 pl-2 text-center"
      style={{ borderTop: "1px solid #999" }}
    >
      <div className="text-white pb-2 h4">Counter: {count}</div>
      <div className="row">
        <div className="p-4 col-12 col-md-6">
          <div className="border p-4">
            <h4 className="text-success pb-2">Basic Counter</h4>
            <button
              className="btn btn-success"
              onClick={() => dispatch(increment())}
            >
              Add
            </button>
            &nbsp;
            <button
              className="btn btn-danger"
              onClick={() => dispatch(decrement())}
            >
              Remove
            </button>
          </div>
        </div>
        <div className="p-4 col-12 col-md-6">
          <div className="border p-4">
            <h4 className="text-primary pb-2">Miltiplier Counter</h4>
            <div className="row">
              <div className="col-4 p-1">
                <input
                  type="text"
                  placeholder="multiplier..."
                  className="form-control"
                  value={multiplier}
                  onChange={(e) => setMultiplier(e.target.value)}
                ></input>
              </div>
              <div className="col-4 p-1">
                <button
                  className="btn btn-primary form-control"
                  onClick={() => dispatch(incrementMiltiplier(multiplier))}
                >
                  Add
                </button>
              </div>
              <div className="col-4 p-1">
                <button
                  className="btn btn-danger form-control"
                  onClick={() => dispatch(decrementMiltiplier(multiplier))}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
