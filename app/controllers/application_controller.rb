class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :configure_permitted_parameters, if: :devise_controller?

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_in) { |u| u.permit(:email, :password, :remember_me, :login, :username) }
    devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:email, :password, :password_confirmation, :username, :skintone_id, :eyecolor_id, :avatar) }
    devise_parameter_sanitizer.for(:account_update) {|u| u.permit(:email, :password, :passowrd_confirmation, :current_password, :username, :avatar) }
  end

  def after_sign_in_path_for(resource)
    profile_path(current_user)
  end
end
