Rails.application.routes.draw do

  root "users#index"

  resources :users, only: [:index, :show] do
    resources :badges, only: [:create, :index, :update]
  end
end
