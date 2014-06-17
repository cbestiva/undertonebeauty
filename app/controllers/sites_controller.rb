class SitesController < ApplicationController
  def index
  end

  def browndark
    @users = User.where( {skintone_id: [5,6]} ).order(:username)

    respond_to do |f|
      f.html
      f.json {render json: @users}
    end

  end

  def fairmedium
    @users = User.where( {skintone_id: [2,3]} ).order(:username)

    respond_to do |f|
      f.html
      f.json {render json: @users}
    end
  end

  def olivebrown
    @users = User.where( {skintone_id: [4,5]} ).order(:username)

    respond_to do |f|
      f.html
      f.json {render json: @users}
    end
  end

  def lightfair
    @users = User.where( {skintone_id: [1,2]} ).order(:username)

    respond_to do |f|
      f.html
      f.json {render json: @users}
    end
  end
end
