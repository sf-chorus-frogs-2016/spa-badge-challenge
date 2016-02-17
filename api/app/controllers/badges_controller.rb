class BadgesController < ApplicationController
	def create
		@newbadge = Badge.create(student_id: params[:student], text: params[:badge])
    render json: @newbadge
	end

  def update_upvote
    @badge = Badge.find(params[:id])
    @badge.update(vote_total: @badge.vote_total+=1)
    render json: @badge
  end

  def update_downvote
    @badge = Badge.find(params[:id])
    @badge.update(vote_total: @badge.vote_total-=1)
    render json: @badge
  end

end
