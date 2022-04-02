const explorer = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "public",
      isFolder: true,
      items: [
        {
          name: "index.html",
          isFolder: false
        }
      ]
    },
    {
      name: "src",
      isFolder: true,
      items: [
        {
          name: "folder",
          isFolder: true,
          items: [
            {
              name: "data.js",
              isFolder: false
            }
          ]
        },
        {
          name: "App.js",
          isFolder: false
        },
        {
          name: "index.js",
          isFolder: false
        },
        {
          name: "styles.css",
          isFolder: false
        }
      ]
    },
    {
      name: "package.json",
      isFolder: false
    }
  ]
};

export default explorer;
