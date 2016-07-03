class Api::V1::PostsController < ApplicationController 
  skip_before_filter :verify_authenticity_token 
  before_action :set_post, only: [:show, :edit, :update, :destroy]
  respond_to :json 
  
  def index 
    @posts = Post.all.order("created_at desc")
    render json: @posts
  end 

  def show 
    render json: @post
  end 

  def create 
    @post = Post.new(post_params) 
    if @post.save 
      respond_to do |format|
        format.json { render :json => @post }
      end 
    end 
  end 

  def update 
    if @post.update(post_params) 
      respond_to do |format| 
        format.json { render :json => @post }
      end 
    end 
  end 

  def destroy 
    @post.destroy
  end 

  private 
    def post_params 
      params.require(:post).permit(:title, :content, :user_id) 
    end 

    def set_post
      @post = Post.find(params[:id])
    end
end 