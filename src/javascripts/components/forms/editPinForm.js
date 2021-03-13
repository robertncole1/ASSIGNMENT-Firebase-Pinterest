import selectBoard from './selectBoard';

const editPinForm = (pinObject) => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="edit-pin-form" class="mb-4">
      <div class="form-group">
        <label for="title">Edit Pin Title</label>
        <input type="text" class="form-control" id="pin-title" aria-describedby="pinTitle" placeholder="Enter Pin Title" value="${pinObject.pinTitle}">
      </div>
      <div class="form-group">
        <label for="image">Edit Pin Description</label>
        <input type="url" class="form-control" id="pin-description" aria-describedby="pinDescription" placeholder="Pin Description" value="${pinObject.pinDescription}">
      </div>
      <div class="form-group">
        <label for="image">Edit Pin Image</label>
        <input type="text" class="form-control" id="pin-image" placeholder="Image URL" value="${pinObject.imgUrl}">
      </div>
      <div class="form-group" id="select-board">
      </div>
      <button type="submit" id="update-pin--${pinObject.firebaseKey}" class="btn btn-success">Update Pin</button>
    </form>`;
  selectBoard(pinObject);
};

export default editPinForm;
