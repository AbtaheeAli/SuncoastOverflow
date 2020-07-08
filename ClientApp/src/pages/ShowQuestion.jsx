import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { Questions } from './Questions'

export function ShowQuestion() {
  const params = useParams()
  const id = params.id

  const [question, setQuestion] = useState({
    title: '',
    body: '',
    tags: '',
    answers: [],
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
          {/* <span className="pt-3">
            <strong>21 March, 2014</strong>
          </span> */}
          <p>{question.body}</p>
        </div>
      </div>

      <div className="row mb-5">
        {question.answers.length > 0 && (
          <div className="col-12">
            <h3>Answers</h3>
            <ul className="timeline">
              {question.answers.map(answer => (
                <li key={answer.id}>
                  <span className="float-right">{answer.createdAt}</span>
                  <p>{answer.body}</p>
                </li>
              ))}
              {/* <small className="mr-3">
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
            </small> */}
            </ul>
          </div>
        )}
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
