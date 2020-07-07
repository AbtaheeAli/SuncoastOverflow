import React from 'react'

export function AskQuestions() {
  return (
    <div className="card">
      <div className="card-header">Ask a Question</div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label htmlFor="name">Title</label>
            <input type="text" className="form-control" id="name" />
          </div>

          <div className="form-group">
            <label htmlFor="description">Body</label>
            <textarea type="text" className="form-control" id="description" />
            <small id="descriptionHelp" className="form-text text-muted">
              Enter your question.
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="description">Tags</label>
            <textarea type="text" className="form-control" id="address" />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
