class VotesController < ApplicationController
  before_action :set_vote, only: [:show, :update, :destroy]

  def index
    @votes = Vote.where(badge_id: params[:badge_id])
    render json: @votes
  end

  def show
    render json: @vote
  end

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

  def destroy
    @vote.destroy
    head :no_content
  end

  private

  def set_vote
    @vote = Vote.find(params[:id])
  end

  def vote_params
    params.permit(:name)
  end

  def err
    render json: @vote.errors, status: :unprocessable_entity
  end
end
