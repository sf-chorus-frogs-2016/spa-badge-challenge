Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".
  resources :students, only: [:index, :show] do
    resources :badges, only: [:index, :create]
  end

  resources :badges, only: :show do
    resources :votes, only: [:index, :create]
  end

end
