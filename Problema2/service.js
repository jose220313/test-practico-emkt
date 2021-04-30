const data = [
  {
    menu: {
      id: "file",
      value: "File",
      popup: {
        menuitem: [
          { value: "New", onclick: "CreateNewDoc()" },
          { value: "Open", onclick: "OpenDoc()" },
          { value: "Close", onclick: "CloseDoc()" },
        ],
      },
    },
  },
];

document.getElementById('jsonData').innerHTML = `${JSON.stringify(data, undefined, 2)}`

export {data}