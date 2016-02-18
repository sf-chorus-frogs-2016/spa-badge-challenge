class BadgesController < ApplicationController
	before_action :set_user, only: [:show, :update]

	def create
		@badge = Badge.new(badge_params)
		if @badge.save
			render json: @badge, status: :created, location: @user
			# which javascript can grab later
		else
			err
		end
	end

	def index
		@badges = Badge.where(user_id: @user.id)
		render json: @badges
	end

	def update
		if @badges.udpate(badge_params)
				head :no_content
		else
			err
		end
	end

private

  def set_user
    @user = User.find(params[:id])
  end

  def badge_params
    params.permit(:description, :user_id)
    # inside description pass in a data user_id hidden 
    # tells you what keys are allowed 
  end

  def err
    render json: @badge.errors, status: :unprocessable_entity
  end

end
