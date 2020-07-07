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
            <small id="descriptionHelp" className="form-text text-muted">
              Be specific and imagine you're asking a question to another person
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="description">Body</label>
            <textarea type="text" className="form-control" id="description" />
            <small id="descriptionHelp" className="form-text text-muted">
              Include all the information someone would need to answer your
              question
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="description">Tags</label>
            <textarea type="text" className="form-control" id="address" />
            <small id="descriptionHelp" className="form-text text-muted">
              Add up to 5 tags to describe what your question is about
            </small>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
