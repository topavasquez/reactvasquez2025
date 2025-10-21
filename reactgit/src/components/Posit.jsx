export default function Posit({ postit, eliminarPostit }) {
  return (
    <li className="col-xs-12 post-it">
      <div className="position-relative">
        <h2>{postit.titulo}</h2>
        <p>{postit.descripcion}</p>
        <button
          onClick={() => eliminarPostit(postit.id)}
          className="btn btn-danger position-absolute bottom-0 end-0 m-2"
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}
