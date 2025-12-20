import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  //   function handleChange(e) {
  //     // console.log(e.target.value);
  //     setName(e.target.value);
  //   }

  return (
    <div>
      <form>
        <input
          //   onChange={function demo(e) {
          //     handleChange(e);
          //   }}
          //   onChange={(e) => handleChange(e)}
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        />
      </form>
    </div>
  );
}
