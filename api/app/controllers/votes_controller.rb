class VotesController < ApplicationController

  def index
    @votes = Vote.where(badge_id: params[:badge_id])
    @votes_up = @votes.where(status: "up").count
    @votes_down = @votes.where(status: "down").count
    @points = @votes_up - @votes_down
    render json: [ badge_id: params[:badge_id], points: @points]
  end

  def show

  end

  def create
  end
end
