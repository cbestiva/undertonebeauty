class SitesController < ApplicationController
  def index
  end

  def brownblack
    @users = User.all
  end

  def fairmedium
    @users = User.all
  end
end
