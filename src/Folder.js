import { useState } from "react";

const Folder = ({ explorer }) => {
  const { isFolder, items } = explorer;

  const [expand, setExpand] = useState(false);

  if (isFolder) {
    return (
      <>
        <div onClick={() => setExpand(!expand)}>{explorer.name}</div>
        {expand &&
          items.map((exp) => (
            <div style={{ paddingLeft: 15 }}>
              <Folder explorer={exp} />
            </div>
          ))}
      </>
    );
  } else {
    return <div>{explorer.name} </div>;
  }
};

export default Folder;
