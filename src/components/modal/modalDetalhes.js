import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Api from "../../services/api";

export default function ModalDetalhes({ showModal, closeModal, id }) {
  const [detail, setDetail] = useState([]);
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");

  // Sempre que o botão "Details" for clicado, o Hook carrega as informações do quadrinho utilizando o seu ID.
  useEffect(() => {
    Api.get(`comics/${id}`)
      .then((response) => {
        setDetail(response.data.data.results[0]);
        setImg(
          response.data.data.results[0].thumbnail.path +
            "." +
            response.data.data.results[0].thumbnail.extension
        );
        setPrice(response.data.data.results[0].prices[0].price);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={showModal}
      onHide={closeModal}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {detail.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: "center" }}>
        <img
          src={img}
          alt="thumbnail"
          style={{ width: "350px", marginBottom: "1em" }}
        />
        <h4>Description</h4>
        <p>{detail.description}</p>
        <p>
          <b>Price:</b> ${price}
          <br />
          <b>Page count:</b> {detail.pageCount}
          <br />
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeModal}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}
