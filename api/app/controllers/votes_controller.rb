class VotesController < ApplicationController
  before_action :set_vote, only: [:update]

  def create
    @vote = Vote.new(vote_params)
    if @vote.save
      render json: @vote, status: :created, location: @vote
    else
      err
    end
  end

  def update
    if @vote.update(vote_params)
      head :no_content
    else
      err
    end
  end

  private

  def set_vote
    @vote = Vote.find(params[:id])
  end

  def vote_params
    params.permit(:title, :author, :date, :body)
  end

  def err
    render json: @vote.errors, status: :unprocessable_entity
  end
end
