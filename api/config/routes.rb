Rails.application.routes.draw do

  root "students#index"

  resources :badges, except: [:new, :edit] do
    resources :votes, except: [:edit]
  end

  resources :students, only: [:show, :index]

end
