class VotesController < ApplicationController

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

  def post_params
    params.permit(:value)
  end

  def err
    render json: @vote.errors, status: :unprocessable_entity
  end

end
