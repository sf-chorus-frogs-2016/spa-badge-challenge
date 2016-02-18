class BadgesController < ApplicationController
  # before_action :set_student, only: [:show]

  def index
    @badges = Badge.where(student_id: params[:student_id])
    render json: @badges
  end

  def show
    render json: @badge
  end

  def create
  end

  private
    def set_student
      @badge = Badge.find(params[:id])
    end

end
