import React from "react";

const EditBilgi = () => {
  return (
    <div
      className="modal fade"
      id="editMoral"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="editMoral"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fs-5" id="editMoral">
              Modal title
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="title">Title</label>
              <input type="text" className="form-control" value={""} />
            </div>
            <div className="mb-3">
              <label htmlFor="desc">Description</label>
              <input type="text" className="form-control" value={""} />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-warning "
              data-bs-dismiss="modal"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBilgi;
