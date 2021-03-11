import selectBoard from './selectBoard';

const addPinForm = () => {
  document.querySelector('#title-area').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
  <h5>Add a Pin</h5>
    <form id="submit-pin-form" class="mb-4">
      <div class="form-group">
        <label for="title">Pin Title</label>
        <input type="text" class="form-control" id="pin-title" aria-describedby="pinTitle" placeholder="Pin Title" required>
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="pin-image" placeholder="Image URL" required>
      </div>
      <div class="form-group">
        <label for="title">Pin Description</label>
        <input type="text" class="form-control" id="pin-description" aria-describedby="pinDescription" placeholder="Pin Description" required>
      </div>
      <div class="form-group" id="select-board">
      </div>
      <button type="submit" id="submit-pin" class="btn btn-primary">Submit Pin</button>
    </form>`;
  selectBoard();
};

export default addPinForm;
