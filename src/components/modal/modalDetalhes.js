import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Api from "../../services/api";
import CryptoJS from "crypto-js";

export default function ModalDetalhes({ showModal, closeModal, id }) {
  const [detail, setDetail] = useState([]);
  const [img, setImg] = useState("");

  useEffect(() => {
    const ts = Math.floor(Date.now() / 1000);
    const apikey = "d06c2cbee8ef14e74aa4561e1f135090";
    const hash = CryptoJS.MD5(
      ts +
        "0da6efb140fbb420811af22f041b8c98681eecbad06c2cbee8ef14e74aa4561e1f135090"
    ).toString();
    Api.get(`comics/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}`)
      .then((response) => {
        setDetail(response.data.data.results[0]);
        setImg(
          response.data.data.results[0].thumbnail.path +
            "." +
            response.data.data.results[0].thumbnail.extension
        );
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
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {detail.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: "center" }}>
        <img src={img} style={{ width: "350px", marginBottom: "1em" }} />
        <p>{detail.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeModal}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}
