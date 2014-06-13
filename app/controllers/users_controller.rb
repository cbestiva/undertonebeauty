class UsersController < ApplicationController
  def show
    @user = current_user
    @product = Product.new

  end
end
