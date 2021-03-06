class ProductsController < ApplicationController
  before_filter :authenticate_user!, only: [:create, :update, :destroy]
  def index
    @products = Product.all

    respond_to do |f|
      f.html
      f.json {render json: @products}
    end
  end

  def create
    new_product = params.require(:product).permit(:name, :category_id, :review, :image)
    @product = current_user.products.create(new_product)

    respond_to do |f|
      f.html {redirect_to(profile_url(current_user))}
      f.json {render json: @product}
    end
  end

  def show
    @products = current_user.products 
  end

  def edit
    @product = Product.find(params[:id])
  end

  def update
    product = Product.find(params[:id])
    product.update_attributes(params[:product].permit(:name, :category_id, :review, :image))

    respond_to do |f|
      f.html {redirect_to profile_url(current_user)}
      f.json {render json: product, status: 200}
    end
  end

  def destroy
    product = Product.find(params[:id])
    product.delete

    respond_to do |f|
      f.html {redirect_to profile_url(current_user)}
      f.json {render json: product, status: 200}
    end
  end
end