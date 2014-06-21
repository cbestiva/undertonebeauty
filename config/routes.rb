Undertonebeauty::Application.routes.draw do
  devise_for :users
  resources :products
  root to: "sites#index"

  get "/undertonebeauty", to: "sites#index", as: :home_url
  get "users", to: "users#index"
  get "users/:username" => "users#show", as: "profile"
  get "undertonebeauty/brown-dark" => "sites#browndark"
  post "undertonebeauty/brown-dark" => "sites#browndark"
  get "undertonebeauty/fair-medium" => "sites#fairmedium"
  post "undertonebeauty/fair-medium" => "sites#fairmedium"
  get "undertonebeauty/olive-brown" => "sites#olivebrown"
  post "undertonebeauty/olive-brown" => "sites#olivebrown"
  get "undertonebeauty/light-fair" => "sites#lightfair"
  post "undertonebeauty/light-fair" => "sites#lightfair"
  get "undertonebeauty/:username/:id" => "users#preview"
end
