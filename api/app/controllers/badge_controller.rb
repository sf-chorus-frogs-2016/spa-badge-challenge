class BadgeController < ApplicationController

  def create
    @badge = Badge.new(sentence: params[:sentence], votes: params[:votes], person_id: params[:person_id])
    @badge.save
    @person = Person.find(params[:person_id])
    render json: @badge
  end

  def update
    if upvote
      :vote += 1
    else
      :vote -= 1
    end
  end
end
