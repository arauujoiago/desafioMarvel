import "./listaComics.css";
import Api from "../../services/api";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import ModalDetalhes from "../modal/modalDetalhes";

import React, { useState, useEffect } from "react";

export default function ListaComics() {
  const [comics, setComics] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [idComic, setIdComic] = useState("");

  // Requisição a API para gerar a lista de Quadrinhos
  useEffect(() => {
    Api.get(`comics`)
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
        <Form>
          <div className="buscaComics">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Search</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                //Caixa de busca, utiliza a expressão digitada para buscar quadrinhos
                id="buscaComics"
                onChange={(event) => {
                  Api.get('comics', {
                    params: {
                      titleStartsWith: event.target.value,
                    },
                  })
                    .then((response) => {
                      setComics(response.data.data.results);
                    })
                    .catch((err) => {
                      console.error(err);
                    });
                }}
              />
            </InputGroup>
          </div>
          <div className="listaComics">
            {/* Função map() para exibir cada quadrinho que a API trouxe */}
            {comics.map((comic) => {
              return (
                <div key={comic.id}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={
                        comic.thumbnail.path + "." + comic.thumbnail.extension
                      }
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
                        Details
                      </Button>
                    </Card.Body>
                    <Form.Check
                      type="checkbox"
                      id={`sendCheckBox${comic.id}`}
                      label={"Send?"}
                    />
                  </Card>
                </div>
              );
            })}
            <Button type="submit" variant="success">
              Send Comics
            </Button>
          </div>
        </Form>
        <ModalDetalhes
          id={idComic}
          showModal={modalShow}
          closeModal={() => setModalShow(false)}
        />
      </div>
    </div>
  );
}
