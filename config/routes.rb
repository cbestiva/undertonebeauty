Undertonebeauty::Application.routes.draw do
  devise_for :users, controllers: { registrations: "users/registrations", passwords: "users/passwords" }
  root to: "sites#index"

  get "/undertonebeauty", to: "sites#index", as: :home_url
  get "users/show/:id" => "users#show", as: "profile"
end
