import "./listaComics.css";
import Api from "../../services/api";
import CryptoJS from "crypto-js";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import ModalDetalhes from "../modal/modalDetalhes";

import React, { useState, useEffect } from "react";

export default function ListaComics() {
  const [comics, setComics] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [idComic, setIdComic] = useState("");

  const ts = Math.floor(Date.now() / 1000);
  const apikey = "d06c2cbee8ef14e74aa4561e1f135090";
  const hash = CryptoJS.MD5(
    ts +
      "0da6efb140fbb420811af22f041b8c98681eecbad06c2cbee8ef14e74aa4561e1f135090"
  ).toString();
  useEffect(() => {
    Api.get(`comics?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=12`)
      .then((response) => {
        setComics(response.data.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="cardExterno">
      <div className="cardInterno">
        <div className="buscaComics">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text> Buscar</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              id="inlineFormInputGroupUsername"
              onChange={(event) => {
                Api.get(`comics?&ts=${ts}&apikey=${apikey}&hash=${hash}`, {
                  params: {
                    titleStartsWith: event.target.value,
                  },
                })
                  .then((response) => {
                    setComics(response.data.data.results);
                    console.log(response.data.data.results);
                  })
                  .catch((err) => {
                    console.error(err);
                  });
              }}
            />
          </InputGroup>
        </div>
        <div className="listaComics">
          {comics.map((comic) => {
            return (
              <div key={comic.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                  />
                  <Card.Body>
                    <Card.Title>{comic.title}</Card.Title>
                    <Button
                      variant="dark"
                      onClick={() => {
                        setIdComic(comic.id);
                        setModalShow(true);
                      }}
                    >
                      Detalhes
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
        <ModalDetalhes
          id={idComic}
          showModal={modalShow}
          closeModal={() => setModalShow(false)}
        />
      </div>
    </div>
  );
}
