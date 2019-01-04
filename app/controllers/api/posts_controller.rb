class Api::PostsController < ApplicationController

  def index
    render json: Post.all
  end

  def create
    post = Post.new(post_params)
    if post.save
      render json: post
    else
      render json: { errors: post.errors }, status: :unprocessable_entity
    end
  end

  def update
    post = Post.find(params[:id])
    post.update(complete: !post.complete)
    render json: post
  end

  def destroy
    Post.find(params[:id]).destroy
    render json: { message: 'Item deleted' }
  end

  private

  def item_params
    params.require(:post).permit(:name, :description, :body, :date)
  end

end
