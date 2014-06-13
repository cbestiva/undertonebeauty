class SitesController < ApplicationController
  def index
  end

  def browndark
    @users = User.find(:all, order: :username)
  end

  def fairmedium
    @users = User.find(:all, order: :username)
  end

  def olivebrown
    @users = User.find(:all, order: :username)
  end

  def lightfair
    @users = User.find(:all, order: :username)
  end
end
