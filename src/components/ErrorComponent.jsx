function ErrorMessage({ tab, type }) {
  return (
    <div className="error__message">
      <h1>Oops! :(</h1>
      <p>
        Doesn't have any {tab} {type} yet
      </p>
    </div>
  );
}

export default ErrorMessage;
