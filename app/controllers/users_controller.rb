class UsersController < ApplicationController
  def index
    @users = User.all

    respond_to do |f|
      f.html
      f.json {render json: @users}
    end
  end

  def show
    @user = User.find_by_username(params[:id])
    @product = Product.new 
  end

  def preview
    @user = User.find(params[:id])
  end

  def edit
    @user = User.find(params[:id])
    # @user.update_without_password(devise_parameter_sanitizer.sanitize(:account_update))
  end
end
