function MouseClicker() {
  const handleButtonClick = (event) => {
    console.log(event.target.name);
  };

  const handleImageClick = (event) => {
    console.log(event.target.src);
    event.stopPropagation();
  };

  return (
    <button name="one" onClick={handleButtonClick}>
      <img
        src="https://m.media-amazon.com/images/I/41-7DGM-uPL._AC_UF894,1000_QL80_.jpg"
        width={150}
        alt="Placeholder"
        onClick={handleImageClick}
        style={{ pointerEvents: "all" }}
      />
      Click Me
    </button>
  );
}

export default MouseClicker;
