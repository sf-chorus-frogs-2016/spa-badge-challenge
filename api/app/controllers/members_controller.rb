class MembersController < ApplicationController
  before_action :set_member, only: [:show, :update, :destroy]

  def index
    @members = Member.all
    render json: @members, include: :cohort
  end

  def show
    render json: @member, include: [:cohort, :badges]
  end

  def create
    @member = Member.new(member_params)
    if @member.save
      render json: @member, status: :created, location: @member
    else
      err
    end
  end

  def update
    if @member.update(member_params)
      head :no_content
    else
      err
    end
  end

  def destroy
    @member.destroy
    head :no_content
  end

  private

  def set_member
    @member = Member.find(params[:id])
  end

  def member_params
    params.permit(:title, :author, :date, :body)
  end

  def err
    render json: @member.errors, status: :unprocessable_entity
  end
end
