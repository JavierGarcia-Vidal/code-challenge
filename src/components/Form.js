import React from "react";

const Form = () => {
  return (
    <form className="form">
      <div className="form__title">
        <input
          type="text"
          name="title"
          className="input__title"
          placeholder="Introduzca un titulo ..."
        />
      </div>
      <div className="info">
        <div className="form__author">
          <input
            type="text"
            name="author"
            className="input__author"
            placeholder="Introduzca un autor ..."
          />
        </div>
        <div className="form__content">
          <textarea
            rows="3"
            name="content"
            className="input__content"
            placeholder="Introduzca un contenido ..."
          />
        </div>
        <div className="form__tags">
          <div className="checkbox__tags">
            <input
              type="checkbox"
              className="input__tag"
              id="videogame"
              value="videogame"
            />
            <label for="videogame">Videojuegos</label>
          </div>
          <div className="checkbox__tags">
            <input type="checkbox" className="input__tag" id="pc" value="pc" />
            <label for="pc">PC</label>
          </div>
          <div className="checkbox__tags">
            <input
              type="checkbox"
              className="input__tag"
              id="online"
              value="online"
            />
            <label for="online">Online</label>
          </div>
          <div className="checkbox__tags">
            <input
              type="checkbox"
              className="input__tag"
              id="movies"
              value="movies"
            />
            <label for="movies">Peliculas</label>
          </div>
          <div className="checkbox__tags">
            <input
              type="checkbox"
              className="input__tag"
              id="ebooks"
              value="ebooks"
            />
            <label for="ebooks">eBooks</label>
          </div>
        </div>
        <div className="form__submit">
          <input
            type="submit"
            className="input__submit"
            value="Añadir un articulo"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
