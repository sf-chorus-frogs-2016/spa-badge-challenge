class StudentsController < ApplicationController

  before_action :set_student, only: [:show, :update, :destroy]

  def index
    @students = Student.all
    render json: @students
  end

  def show
    render json: @student
  end

  def create
    @student = Student.new(student_params)
    if @student.save
      render json: @student, status: :created, location: @student
    else
      errs
    end
  end

  def update
    if @student.update(student_params)
      head :no_content
    else
      errs
    end
  end

  def destroy
    @student.destroy
    head :no_content
  end

  private
  def set_student
    @student = Student.find(params[:id])
  end

  def student_params
    params.permit(:first_name, :last_name)
  end

  def errs
    render json: @studnet.errors, status: :unprocessable_entity
  end
end
