class BadgesController < ApplicationController

  before_action :set_badge, only: [:show, :update, :destroy]

  def index
    @badges = Badge.where(student_id: params[:student_id])
    @prepared_badges = @badges.map {|badge| prepare_badge(badge) }
    render json: @prepared_badges
  end


  def create
    @badge = Badge.new(badge_params)
    render json: prepare_badge(@badge), status: :created
  end

  private
  def set_badge
    @post = Badge.find(params[:id])
  end

  def badge_params
    params.permit(:body)
  end

  def display_error
    render json: @post.errors, status: :unprocessable_entity
  end

  def prepare_badge(badge)
    badge.attributes.merge({total: badge.total_score})
  end
end
