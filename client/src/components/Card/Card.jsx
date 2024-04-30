/* eslint-disable react/prop-types */
function Card(props) {
  return (
    <>
      <div className="flex flex-col gap-10 p-4 py-6 md:px-10 bg-white drop-shadow-md rounded">
        {props.children}
      </div>
    </>
  );
}

export default Card;
