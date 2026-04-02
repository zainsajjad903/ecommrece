const Filterproduct = (props) => {
  function getvalue(data) {
    props.filterProduct(data.target.value);
  }
  return (
    <>
      <select name="filter product" id="" onClick={getvalue}>
        <option value="all">all</option>
        <option value="available">available</option>
        <option value="unavailable">unavailable</option>
      </select>
    </>
  );
};
export default Filterproduct;
