class SkintonesController < ApplicationController
  def index
    @skintones = Skintone.all
  end

  def show
    @skintone = Skintone.find(params[:id])
  end
end
