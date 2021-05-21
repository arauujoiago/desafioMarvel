import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Api from "../../services/api";
import CryptoJS from "crypto-js";

export default function ModalDetalhes(props) {
  const [detalhesComic, setDetalhesComic] = useState();

  const ts = Math.floor(Date.now() / 1000);
  const apikey = "d06c2cbee8ef14e74aa4561e1f135090";
  const hash = CryptoJS.MD5(
    ts +
      "0da6efb140fbb420811af22f041b8c98681eecbad06c2cbee8ef14e74aa4561e1f135090"
  ).toString();

  useEffect(() => {
    Api.get(`comics/${props.id}?ts=${ts}&apikey=${apikey}&hash=${hash}`)
      .then((response) => {
        setDetalhesComic(response.data.data.results);
        console.log(response.data.data.results)
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {detalhesComic[0].title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: "center" }}>
        <img
          src={
            detalhesComic[0].thumbnail.path +
            "." +
            detalhesComic[0].thumbnail.extension
          }
          style={{ maxWidth: "500px", margin: "1em" }}
        />
        <p>{detalhesComic[0].description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
