
class MembersController < ApplicationController

  before_action :set_member, only: [:show]

  def index
    @members = Member.all
    render json: @members
  end

  def show
    render json: @member
  end

  private

  def set_member
    @member = Member.find(params[:id])
  end

end
