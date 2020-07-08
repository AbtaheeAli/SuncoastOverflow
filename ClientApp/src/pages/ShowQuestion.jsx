import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

export function ShowQuestion() {
  const params = useParams()
  const id = params.id

  const [question, setQuestion] = useState({
    title: '',
    body: '',
    tags: '',
  })

  useEffect(() => {
    const fetchQuestion = async () => {
      const response = await fetch(`/api/Questions/${id}`)
      const apiData = await response.json()

      setQuestion(apiData)
    }

    fetchQuestion()
  }, [])

  return (
    <div className="taco-listing">
      <div className="media mb-5">
        <span className="pr-3 display-2" role="" aria-label="t"></span>
        <div className="media-body">
          <h2 className="mt-3">{question.title}</h2>
          <span className="pt-3">
            <strong>21 March, 2014</strong>
          </span>
          <p>{question.body}</p>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-12">
          <h3>Answers</h3>
          <ul>
            <li>
              <p className="mb-2">
                This is how I would recommend:
                <span className="float-right">21 March, 2014</span>
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque diam non nisi semper, et elementum lorem ornare.
                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                sodales vehicula....
              </p>
              <small className="mr-3">
                <button className="btn btn-success btn-sm">
                  <span className="mr-2" role="img" aria-label="upvote">
                    👍🏻
                  </span>
                  5
                </button>
              </small>
              <small className="mr-3">
                <button className="btn btn-danger btn-sm">
                  <span className="mr-2" role="img" aria-label="downvote">
                    👎🏻
                  </span>{' '}
                  3
                </button>
              </small>
            </li>
            <li>
              <p className="mb-2 pt-5">
                This is another way!
                <span className="float-right">21 March, 2014</span>
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque diam non nisi semper, et elementum lorem ornare.
                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                sodales vehicula....
              </p>
              <small className="mr-3">
                <button className="btn btn-success btn-sm">
                  <span className="mr-2" role="img" aria-label="upvote">
                    👍🏻
                  </span>
                  5
                </button>
              </small>
              <small className="mr-3">
                <button className="btn btn-danger btn-sm">
                  <span className="mr-2" role="img" aria-label="downvote">
                    👎🏻
                  </span>{' '}
                  3
                </button>
              </small>
            </li>
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-header">Enter your own answer</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="summary">Headline</label>
              <input
                type="text"
                className="form-control"
                id="summary"
                aria-describedby="summaryHelp"
              />
            </div>
            <div className="form-group">
              <label for="review">Answer</label>
              <textarea type="text" className="form-control" id="review" />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
