Undertonebeauty::Application.routes.draw do
  devise_for :users
  root to: "sites#index"

  get "/undertonebeauty", to: "sites#index", as: :home_url
end
