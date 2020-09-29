import React from "react";
import Modal from "react-modal";
import { CakeTile, AddCakeForm } from "../../components";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

if (process.env.NODE_ENV !== "test") Modal.setAppElement("#root");

export default function Home({ cakes, updateData }) {
  let subtitle;
  const newCakeId = cakes ? cakes.length + 1 : 0;
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const openModal = () => setModalIsOpen(true);

  const closeModal = () => setModalIsOpen(false);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "black";
  }

  const loadPage = () => {
    if (!cakes) {
      return <p>Cakes are still baking</p>;
    }
    // in case of an error being passed down
    if (cakes.status && cakes.status > 400) {
      return (
        <p>Oops, something happened while we were baking, try again later.</p>
      );
    }
    // if cakes is undefined, loading is true and display loading message
    // else if cakes will be an array, loading is false and replace with a bunch of cake tiles.
    return cakes.map((cake) => (
      <CakeTile cake={cake} key={`${cake.name}-${cake.id}`} />
    ));
  };

  return (
    <div>
      <div className="flex-title">
        <h2>Cake List</h2>
        {/* <AddCakeLink /> */}
        <button onClick={openModal}>Add New Cake</button>
      </div>

      {loadPage()}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="New Cake Form"
      >
        <div className="flex-title">
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>New Cake Form</h2>
          <button onClick={closeModal}>X</button>
        </div>
        <AddCakeForm
          newCakeId={newCakeId}
          updateData={updateData}
          closeModal={closeModal}
        />
      </Modal>
    </div>
  );
}
