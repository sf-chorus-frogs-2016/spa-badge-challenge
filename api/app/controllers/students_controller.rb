class StudentsController < ApplicationController
  before_action :set_student, only: [:show, :update, :destroy]

  def index
    @students = Student.all
    render json: @students
  end

  def show
    render json: @student, include: :badges
  end

  private

  def set_student
    @student = Student.find(params[:id])
  end

  def display_errors
    render json: @student.errors, status: :unprocessable_entity
  end
end
