export const Techbook = ({ techBooks }) => {
  return (
    <>
      <h1>There are {techBooks.length} Tech Books there!</h1>
      {techBooks.map((tb) => (
        <div className="techbooks">
          <div className="techbook">
            <p className="title">
              <span>Title:</span> {tb.title}
            </p>
            <p className="description">
              <span>Description:</span> {tb.description}
            </p>
          </div>
          <hr />
        </div>
      ))}
    </>
  );
};
