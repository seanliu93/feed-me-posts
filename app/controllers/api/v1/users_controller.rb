class Api::V1::UsersController < ApplicationController 
  skip_before_filter :verify_authenticity_token 
  respond_to :json 
  
  def index 
    @users = User.all
    render json: @users
  end 

  def show 
    @user = User.find(params[:id])
    render json: @user
  end 

  private 
    def post_params 
      params.require(:post).permit(:title, :content, :user_id) 
    end 

end 