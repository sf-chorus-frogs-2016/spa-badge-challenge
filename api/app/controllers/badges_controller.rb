class BadgesController < ApplicationController
  # before_action :set_post, only: [:show, :update, :destroy]
  # def index
  #   @posts = Post.all
  #   render json: @posts
  # end
  #
  # def show
  #   render json: @post
  # end
  #
  # def create
  #   @post = Post.new(post_params)
  #   if @post.save
  #     render json: @post, status: :created, location: @post
  #   else
  #     err
  #   end
  # end
  #
  # def update
  #   if @post.update(post_params)
  #     head :no_content
  #   else
  #     err
  #   end
  # end
  #
  # def destroy
  #   @post.destroy
  #   head :no_content
  # end
  #
  # private
  #
  # def set_post
  #   @post = Post.find(params[:id])
  # end
  #
  # def post_params
  #   params.permit(:title, :author, :date, :body)
  # end
  #
  # def err
  #   render json: @post.errors, status: :unprocessable_entity
  # end
end
