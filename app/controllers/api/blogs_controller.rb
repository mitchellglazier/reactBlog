class Api::BlogsController < ApplicationController

  def index
    render json: Blog.all
  end

  def create
    item = Blog.new(blog_params)
    if blog.save
      render json: blog
    else
      render json: { errors: blog.errors }, status: :unprocessable_entity
    end
  end

  def update
    blog = Blog.find(params[:id])
    blog.update(complete: !blog.complete)
    render json: blog
  end

  def destroy
    Blog.find(params[:id]).destroy
    render json: { message: 'Item deleted' }
  end

  private

  def item_params
    params.require(:blog).permit(:name, :category)
  end

end
