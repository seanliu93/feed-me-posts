class Api::V1::PostsController < ApplicationController 
      skip_before_filter :verify_authenticity_token 
      respond_to :json 
      def index 
        respond_with(Post.all.order("id DESC"))
      end 
      def show 
        respond_with(Post.find(params[:id]))
      end 
      def create 
        @note = Post.new(note_params) 
        if @note.save 
          respond_to do |format|
            format.json { render :json => @note }
          end 
        end 
      end 
      def update 
        @note = Post.find(params[:id])
        if @note.update(note_params) 
          respond_to do |format| 
            format.json { render :json => @note }
          end 
        end 
      end 
 
      def destroy 
        respond_with Post.destroy(params[:id]) 
      end 
      private 
        def todo_params 
          params.require(:post).permit(:title, :content, :user_id) 
        end 
end 