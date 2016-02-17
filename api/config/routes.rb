Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".
  resources :students, except: [:new, :edit]
  resources :badges, except: [:new, :edit]
  resources :votes, except: [:new, :edit]

end
