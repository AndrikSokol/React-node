import React from "react";
import MyButton from "./UI/button/MyButton";

const SwitchPages = ({ totalPages, pagesArray, changePage, page }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {totalPages &&
        pagesArray.map((p) => {
          const st = { marginRight: "10px" };
          if (p == page) st.borderLeft = "2px solid black";
          return (
            <MyButton key={p} onClick={() => changePage(p)} style={st}>
              {p}
            </MyButton>
          );
        })}
    </div>
  );
};

export default SwitchPages;
