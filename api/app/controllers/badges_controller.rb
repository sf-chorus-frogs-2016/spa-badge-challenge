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
      err
    end
  end

  def update
    if @badge.update(badge_params)
      head :no_content
    else
      err
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
    params.permit(:name)
  end

  def err
    render json: @badge.errors, status: :unprocessable_entity
  end
end
