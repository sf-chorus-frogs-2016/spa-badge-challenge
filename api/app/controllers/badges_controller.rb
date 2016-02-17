
class BadgesController < ApplicationController

  before_action :set_badge, only: [:update]

  def index
    @badges = Badge.where(member_id: params[:member_id]).order(points: :desc)
    render json: @badges
  end

# create the new Badge
  def create
    @badge = Badge.new(badge_params)
    if @badge.save
      render json: @badge, status: :created, location: @badge
    else
      err
    end
  end

# exists to allow Points to be adjusted - not otherwise adding Badge edit functionality
# maybe it's better to create custom routes for up/down votes ...
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
    params.permit(:points)
  end

  def err
    render json: @badge.errors, status: :unprocessable_entity
  end

end
