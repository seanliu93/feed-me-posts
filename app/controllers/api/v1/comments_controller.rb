class Api::V1::CommentsController < ApplicationController 
  skip_before_filter :verify_authenticity_token 
  before_action :set_comment, only: [:show, :edit, :update, :destroy]
  respond_to :json 

  def index 
    @comments = Comment.all
  end 

  def show 
    respond_with(Comment.find(params[:id]))
  end 

  def create 
    @comment = Comment.new(comment_params) 
    if @comment.save 
      respond_to do |format|
        format.json { render :json => @comment }
      end 
    end 
  end 

  def update 
    if @comment.update(comment_params) 
      respond_to do |format| 
        format.json { render :json => @comment }
      end 
    end 
  end 

  def destroy 
    respond_with Post.destroy(params[:id]) 
  end 
  
  private 
    def comment_params 
      params.require(:comment).permit(:content, :user_id, :post_id) 
    end 

    def set_comment
      @comment = Comment.find(params[:id])
    end
end 