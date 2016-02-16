class BadgesController < ApplicationController
  before_action :set_badge, only: [:update]

  def create
    # @badge.votes.create
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

  private

  def set_badge
    @badge = Badge.find(params[:id])
  end

  def badge_params
    params.permit(:title, :author, :date, :body)
  end

  def err
    render json: @badge.errors, status: :unprocessable_entity
  end
end
