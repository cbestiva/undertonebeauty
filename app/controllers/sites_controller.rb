class SitesController < ApplicationController
  def index
  end

  def browndark
    @users = User.where( {skintone_id: [5,6]} ).order(:username)
    @products = []
    @users.each do |user|
      @products.push(user.products)
    end

    respond_to do |f|
      f.html
      f.json {render json: [@users, @products]}
    end

  end

  def fairmedium
    @users = User.where( {skintone_id: [2,3]} ).order(:username)
    @products = []
    @users.each do |user|
      @products.push(user.products)
    end

    respond_to do |f|
      f.html
      f.json {render json: [@users, @products]}
    end
  end

  def olivebrown
    @users = User.where( {skintone_id: [4,5]} ).order(:username)
    @products = []
    @users.each do |user|
      @products.push(user.products)
    end    

    respond_to do |f|
      f.html
      f.json {render json: [@users, @products]}
    end
  end

  def lightfair
    @users = User.where( {skintone_id: [1,2]} ).order(:username)
    @products = []
    @users.each do |user|
      @products.push(user.products)
    end

    respond_to do |f|
      f.html
      f.json {render json: [@users, @products]}
    end
  end
end
