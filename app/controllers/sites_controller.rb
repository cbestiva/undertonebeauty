class SitesController < ApplicationController
  def index
  end

  def browndark
    @users = User.all
  end

  def fairmedium
    @users = User.all
  end

  def olivebrown
    @users = User.all
  end

  def lightfair
    @users = User.all
  end
end
