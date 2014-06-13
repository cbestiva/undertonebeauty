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
end
