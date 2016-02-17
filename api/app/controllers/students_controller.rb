class StudentsController < ApplicationController

  def index
    @students = Student.find_by(cohort_id: params[:id])
  end

  def show
    @student = Student.find(params[:student_id])
  end

end
