const addBoardForm = () => {
  document.querySelector('#title-area').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#main-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
  <h5>Add a Board</h5>
    <form id="submit-board-form" class="mb-4">
      <div class="form-group">
        <label for="title">Board Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="boardTitle" placeholder="Enter Board Title" required>
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="image" placeholder="Image URL" required>
      </div>
      <div class="form-group">
        <label for="price">Board Description</label>
        <input type="text" class="form-control" id="description" placeholder="Board Description" required>
      </div>
      <button type="submit" id="submit-board" class="btn btn-primary">Submit Board</button>
    </form>`;
};

export default addBoardForm;
