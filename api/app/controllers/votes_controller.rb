class VotesController < ApplicationController
  def create
    @vote = Vote.create(badge_id: params[:badge_id])
  end
end
