import { useState, useEffect } from "react";

function EssayList() {
  const [listEssays, setListEssays] = useState([]);

  const GetEssayList = async () => {
    const res = await fetch("http://localhost:8787/essay-list");
    const data = await res.json();
    setListEssays(data);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    GetEssayList();
  }, []);

  return (
    <div>
      {listEssays.map((essay) => {
        return <p key={essay.EssayId}>{essay.EssayTitle}</p>;
      })}
    </div>
  );
}

export default EssayList;
