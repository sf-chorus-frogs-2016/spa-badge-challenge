class CohortsController < ApplicationController
  before_action :set_cohort, only: [:show, :update, :destroy]

  def index
    @cohorts = Cohort.all
    render json: @cohorts, include: :members
  end

  def show
    render json: @cohort
  end

  def create
    @cohort = Cohort.new(cohort_params)
    if @cohort.save
      render json: @cohort, status: :created, location: @cohort
    else
      err
    end
  end

  def update
    if @cohort.update(cohort_params)
      head :no_content
    else
      err
    end
  end

  def destroy
    @cohort.destroy
    head :no_content
  end

  private

  def set_cohort
    @cohort = cohort.find(params[:id])
  end

  def cohort_params
    params.permit(:title, :author, :date, :body)
  end

  def err
    render json: @cohort.errors, status: :unprocessable_entity
  end
end
