class BadgesController < ApplicationController

  before_action :set_badge, only: [:show, :update, :destroy]

  def index
    @badges = Badge.all
    render json: @badges
  end

  def show
    render json: @badge
  end

  def create
    @badge = Badge.new(badge_params)
    if @badge.save
      render json: @badge, status: :created, location: @badge
    else
      errs
    end
  end

  def update
    p "******************************"
    p "PARAMS ARE:"
    p params
    p "******************************"
    p params[:data]
    p "******************************"
    vote = params[:vote_type]
    p vote
    vote == "up" ? @badge.votes += 1 : @badge.votes -= 1

    if @badge.save
      # head :no_content
      render json: @badge #, status: :updated, location: @badge
    else
      errs
    end
  end

  def destroy
    @badge.destroy
    head :no_content
  end

  private
  def set_badge
    @badge = Badge.find(params[:id])
  end

  def badge_params
    params.permit(:student_id, :text, :votes)
  end

  def errs
    render json: @badge.errors, status: :unprocessable_entity
  end
end
