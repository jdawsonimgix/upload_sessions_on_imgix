import "./App.css";

function App() {
  const onChange = (e) => {
    async function uploadPicturesToSource(dataSent) {
      console.log(dataSent.name);

      await fetch(
        `https://api.imgix.com/api/v1/sources/upload/62e31fcb03d7afea23063596/` +
          dataSent.name,
        {
          method: "POST",
          body: dataSent,
          headers: {
            Authorization: "Bearer " + "",
            "Content-Type": dataSent.type,
          },
        }
      );
    }

    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      uploadPicturesToSource(files[0]);
    };
    reader.readAsDataURL(files[0]);
  };

  return (
    <div className='App'>
      <input type='file' onChange={onChange} />
    </div>
  );
}

export default App;
